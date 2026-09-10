from pathlib import Path
import json
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from audit_palettes import audit_catalog


class PaletteContractTests(unittest.TestCase):
    def test_catalog_finishes_with_twenty_original_themes(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))
        expected = {
            "velvet-fang", "mauve-meringue", "neon-shinjuku", "ember-circuit", "forge-midnight",
            "afterhours-azure", "frostline", "mossed-brass", "mirage-signal", "tidal-amber",
            "ancient-canopy", "rosewood-mist", "blue-lacquer", "violet-transit", "electric-cobalt",
            "ultraviolet-gold", "mint-nebula", "quiet-viridian", "deep-lagoon", "lunar-periwinkle",
        }
        adapted = {
            "dracula", "catppuccin-mocha", "tokyo-night", "one-dark-pro", "github-dark",
            "night-owl", "nord", "gruvbox-material-dark", "ayu-mirage", "solarized-dark",
            "everforest", "rose-pine", "kanagawa-wave", "material-palenight", "cobalt2",
            "shades-of-purple", "poimandres", "vitesse-dark", "noctis", "moonlight-ii",
        }
        ids = {theme["id"] for theme in catalog["themes"]}

        self.assertEqual(expected - ids, set())
        self.assertEqual(adapted & ids, set())
        self.assertTrue(all("sourceUrl" not in theme for theme in catalog["themes"][100:]))

    def test_catalog_contains_one_hundred_twenty_unique_valid_palettes(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))
        report = audit_catalog(catalog, expected_count=120)
        self.assertEqual(report["count"], 120)
        self.assertEqual(report["duplicate_signatures"], [])
        self.assertEqual(report["duplicate_recipes"], [])
        self.assertEqual(report["contrast_failures"], [])
        self.assertEqual(report["perceptual_failures"], [])
        self.assertEqual(report["expansion_distance_failures"], [])
        self.assertEqual(report["catalog_expansion_distance_failures"], [])
        self.assertEqual(report["reused_colors"], [])
        self.assertEqual(report["unique_color_count"], 1560)
        self.assertGreaterEqual(report["minimum_palette_distance"], 0.08)
        self.assertGreaterEqual(report["minimum_expansion_distance"], 0.11)
        self.assertGreaterEqual(report["minimum_catalog_expansion_distance"], 0.11)

    def test_reusing_any_source_color_is_reported(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))
        first = json.loads(json.dumps(catalog["themes"][0]))
        second = json.loads(json.dumps(catalog["themes"][1]))
        second["colors"]["tool"] = first["colors"]["tool"]
        catalog["themes"] = [first, second]

        report = audit_catalog(catalog, expected_count=2)

        self.assertEqual(report["reused_colors"], [(first["colors"]["tool"], "smoked-hearth.tool", "arctic-lens.tool")])

    def test_reusing_color_inside_one_theme_is_reported(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))
        first = json.loads(json.dumps(catalog["themes"][1]))
        first["colors"]["tool"] = first["colors"]["accent"]
        catalog["themes"] = [first]

        report = audit_catalog(catalog, expected_count=1)

        self.assertEqual(report["reused_colors"], [(first["colors"]["accent"], "arctic-lens.accent", "arctic-lens.tool")])

    def test_expansion_rejects_theme_close_to_foundation(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))
        foundation = json.loads(json.dumps(catalog["themes"][0]))
        near_copy = json.loads(json.dumps(foundation))
        near_copy["id"] = "near-foundation"
        near_copy["name"] = "Near Foundation"
        near_copy["surfaceFamily"] = "near-foundation"
        near_copy["glassCharacter"] = "near-foundation"
        for index, role in enumerate(near_copy["colors"]):
            value = int(near_copy["colors"][role][1:], 16)
            near_copy["colors"][role] = f"#{(value + index + 1) % 0x1000000:06x}"

        report = audit_catalog({"themes": [foundation, near_copy]}, expected_count=2, foundation_count=1)

        self.assertEqual(report["expansion_distance_failures"], [("near-foundation", "smoked-hearth")])

    def test_latest_expansion_rejects_theme_close_to_any_approved_theme(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))
        first = json.loads(json.dumps(catalog["themes"][0]))
        approved = json.loads(json.dumps(catalog["themes"][60]))
        near_copy = json.loads(json.dumps(approved))
        near_copy["id"] = "near-approved"
        near_copy["name"] = "Near Approved"
        near_copy["surfaceFamily"] = "near-approved"
        near_copy["glassCharacter"] = "near-approved"
        for index, role in enumerate(near_copy["colors"]):
            value = int(near_copy["colors"][role][1:], 16)
            near_copy["colors"][role] = f"#{(value + index + 1) % 0x1000000:06x}"

        report = audit_catalog(
            {"themes": [first, approved, near_copy]},
            expected_count=3,
            foundation_count=1,
            approved_count=2,
        )

        self.assertEqual(report["catalog_expansion_distance_failures"], [("near-approved", approved["id"])])

    def test_near_duplicate_palettes_fail_perceptual_distance(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))
        first = catalog["themes"][0]
        clone = json.loads(json.dumps(first))
        clone["id"] = "almost-smoked-hearth"
        clone["name"] = "Almost Smoked Hearth"
        clone["surfaceFamily"] = "near-plum"
        clone["colors"]["accent"] = "#ceb370"
        catalog["themes"] = [first, clone]

        report = audit_catalog(catalog, expected_count=2)

        self.assertEqual(report["perceptual_failures"], [("smoked-hearth", "almost-smoked-hearth")])


if __name__ == "__main__":
    unittest.main()
