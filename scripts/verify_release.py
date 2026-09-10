#!/usr/bin/env python3
"""Verify the extracted release and isolated Desktop install."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import subprocess
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "release-manifest.json"
VERSION = ROOT / "VERSION"


def verify_repository_manifest() -> dict[str, list[str]]:
    contract = json.loads(MANIFEST.read_text(encoding="utf-8"))
    expected = set(contract["repositoryFiles"])
    result = subprocess.run(
        ["git", "ls-files", "--cached", "--others", "--exclude-standard"],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    visible = {line for line in result.stdout.splitlines() if line}
    present_expected = {path for path in expected if (ROOT / path).is_file() and not (ROOT / path).is_symlink()}
    return {
        "missing": sorted(expected - present_expected),
        "extra": sorted(visible - expected),
    }


def verify_release(archive: Path) -> dict[str, object]:
    version = VERSION.read_text(encoding="utf-8").strip()
    contract = json.loads(MANIFEST.read_text(encoding="utf-8"))
    package_root = f"hermes-liquid-glass-v{version}"
    expected = [f"{package_root}/{path}" for path in contract["archiveFiles"]]

    with zipfile.ZipFile(archive) as package:
        names = package.namelist()
        if names != expected:
            raise ValueError("archive inventory does not match release-manifest.json")
        for name in names:
            path = PurePosixPath(name)
            if path.is_absolute() or ".." in path.parts:
                raise ValueError(f"unsafe archive path: {name}")
        with tempfile.TemporaryDirectory(prefix="hermes-liquid-glass-release-") as temp_dir:
            extracted = Path(temp_dir) / "extracted"
            package.extractall(extracted)
            unpacked = extracted / package_root
            plugin = unpacked / "desktop-plugin" / "hermes-liquid-glass-packs" / "plugin.js"

            install_root = Path(temp_dir) / "hermes-home" / "desktop-plugins" / "hermes-liquid-glass-packs"
            install_root.mkdir(parents=True)
            installed = install_root / "plugin.js"
            shutil.copyfile(plugin, installed)
            installed_matches = installed.read_bytes() == plugin.read_bytes()

            syntax = subprocess.run(
                ["node", "--check", str(installed)],
                check=False,
                capture_output=True,
                text=True,
            )
            environment = os.environ.copy()
            environment["PLUGIN_UNDER_TEST"] = str(installed)
            runtime = subprocess.run(
                ["node", "--test", str(ROOT / "tests" / "runtime-smoke.mjs")],
                cwd=ROOT,
                env=environment,
                check=False,
                capture_output=True,
                text=True,
            )
            if syntax.returncode:
                raise ValueError(f"extracted plugin syntax failed: {syntax.stderr.strip()}")
            if runtime.returncode:
                raise ValueError(f"extracted plugin runtime failed: {runtime.stdout.strip()} {runtime.stderr.strip()}")

            source = plugin.read_text(encoding="utf-8")
            theme_count = source.count("name: 'lg-")
            if theme_count != 120:
                raise ValueError(f"expected 120 packaged themes, found {theme_count}")
            imports = {
                match.group(1)
                for line in source.splitlines()
                if line.startswith("import ")
                if (match := re.search(r"from\s+['\"]([^'\"]+)['\"]", line))
            }
            supported_imports = imports <= {"@hermes/plugin-sdk", "react", "react/jsx-runtime"}
            if not supported_imports:
                raise ValueError(f"unsupported packaged plugin imports: {sorted(imports)}")
            blocked = ("powershell", "hkcu", "systemparametersinfo", "windowsterminal")
            desktop_only = not any(value in source.lower() for value in blocked)
            if not desktop_only:
                raise ValueError("packaged plugin contains an operating-system control string")

    return {
        "archive_files": len(expected),
        "theme_count": theme_count,
        "sha256": hashlib.sha256(archive.read_bytes()).hexdigest(),
        "bytes": archive.stat().st_size,
        "installed_plugin_matches": installed_matches,
        "node_syntax_valid": syntax.returncode == 0,
        "runtime_valid": runtime.returncode == 0,
        "supported_imports_only": supported_imports,
        "desktop_only_scope": desktop_only,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("archive", type=Path)
    args = parser.parse_args()
    print(json.dumps(verify_release(args.archive), indent=2))


if __name__ == "__main__":
    main()
