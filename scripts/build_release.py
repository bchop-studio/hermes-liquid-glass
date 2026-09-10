#!/usr/bin/env python3
"""Build the deterministic release archive."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "release-manifest.json"
VERSION = ROOT / "VERSION"
FIXED_TIME = (2026, 1, 1, 0, 0, 0)


def _load_contract() -> tuple[str, list[str]]:
    version = VERSION.read_text(encoding="utf-8").strip()
    if not version or version.endswith("-dev"):
        raise ValueError("VERSION must contain a release version")
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    files = manifest["archiveFiles"]
    if files != sorted(files) or len(files) != len(set(files)):
        raise ValueError("archiveFiles must be sorted and unique")
    return version, files


def build_release(output_dir: Path | None = None) -> Path:
    version, files = _load_contract()
    destination = output_dir or ROOT / "dist"
    destination.mkdir(parents=True, exist_ok=True)
    archive = destination / f"hermes-liquid-glass-v{version}.zip"
    package_root = f"hermes-liquid-glass-v{version}"

    with zipfile.ZipFile(archive, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as package:
        for relative in files:
            source = ROOT / relative
            if not source.is_file() or source.is_symlink():
                raise ValueError(f"release payload must be a regular file: {relative}")
            info = zipfile.ZipInfo(f"{package_root}/{relative}", FIXED_TIME)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            info.create_system = 3
            package.writestr(info, source.read_bytes(), compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)

    return archive


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output-dir", type=Path, default=ROOT / "dist")
    args = parser.parse_args()
    print(build_release(args.output_dir))


if __name__ == "__main__":
    main()
