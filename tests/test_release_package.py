from pathlib import Path
import hashlib
import json
import sys
import tempfile
import unittest
import zipfile

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from build_release import build_release
from verify_release import verify_release, verify_repository_manifest


class ReleasePackageTests(unittest.TestCase):
    def test_approved_cover_is_shipped_and_rendered_by_readme(self):
        manifest = json.loads((ROOT / "release-manifest.json").read_text(encoding="utf-8"))
        cover = "assets/hermes-liquid-glass-cover.png"
        readme = (ROOT / "README.md").read_text(encoding="utf-8")

        self.assertIn(cover, manifest["repositoryFiles"])
        self.assertIn(cover, manifest["archiveFiles"])
        self.assertIn("# Hermes Liquid Glass", readme)
        self.assertNotIn("Hermes Liquid Glass Packs", readme)
        self.assertIn(f"![Hermes Liquid Glass]({cover})", readme)

    def test_repository_contains_only_declared_public_files(self):
        receipt = verify_repository_manifest()

        self.assertEqual(receipt["missing"], [])
        self.assertEqual(receipt["extra"], [])

    def test_release_archive_is_deterministic_and_installable(self):
        with tempfile.TemporaryDirectory() as first_dir, tempfile.TemporaryDirectory() as second_dir:
            first = build_release(Path(first_dir))
            second = build_release(Path(second_dir))

            self.assertEqual(first.read_bytes(), second.read_bytes())
            receipt = verify_release(first)
            archive_sha256 = hashlib.sha256(first.read_bytes()).hexdigest()

        manifest = json.loads((ROOT / "release-manifest.json").read_text(encoding="utf-8"))
        self.assertEqual(receipt["archive_files"], len(manifest["archiveFiles"]))
        self.assertEqual(receipt["theme_count"], 120)
        self.assertEqual(receipt["sha256"], archive_sha256)
        self.assertTrue(receipt["installed_plugin_matches"])
        self.assertTrue(receipt["node_syntax_valid"])
        self.assertTrue(receipt["runtime_valid"])
        self.assertTrue(receipt["supported_imports_only"])
        self.assertTrue(receipt["desktop_only_scope"])

    def test_archive_contains_only_declared_safe_paths(self):
        with tempfile.TemporaryDirectory() as output_dir:
            archive = build_release(Path(output_dir))
            with zipfile.ZipFile(archive) as package:
                names = package.namelist()

        manifest = json.loads((ROOT / "release-manifest.json").read_text(encoding="utf-8"))
        root = f"hermes-liquid-glass-v{(ROOT / 'VERSION').read_text().strip()}/"
        self.assertEqual(names, [root + path for path in manifest["archiveFiles"]])
        self.assertTrue(all(not name.startswith("/") and ".." not in Path(name).parts for name in names))


if __name__ == "__main__":
    unittest.main()
