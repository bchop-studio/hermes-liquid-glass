from pathlib import Path
import json
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from generate_plugin import generate_outputs


class GeneratorTests(unittest.TestCase):
    def test_generator_rejects_an_expansion_theme_too_close_to_the_foundation(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))
        near = json.loads(json.dumps(catalog["themes"][0]))
        near.update(id="foundation-echo", name="Foundation Echo", surfaceFamily="foundation-echo", glassCharacter="foundation-echo")
        near["colors"] = {
            role: "#" + "".join(f"{min(255, int(value[index:index + 2], 16) + 24):02x}" for index in (1, 3, 5))
            for role, value in near["colors"].items()
        }
        catalog["themes"].append(near)

        with self.assertRaises(ValueError):
            generate_outputs(catalog)

    def test_one_hundred_twenty_palettes_generate_complete_desktop_themes_and_glass_recipes(self):
        catalog = json.loads((ROOT / "palettes" / "liquid-glass-palettes.json").read_text(encoding="utf-8"))

        plugin, index, contact_sheet = generate_outputs(catalog)

        self.assertEqual(plugin.count("name: 'lg-"), 120)
        self.assertEqual(plugin.count("darkColors: null"), 120)
        self.assertEqual(plugin.count("glass: {"), 120)
        self.assertIn("hermes-desktop-user-themes-v1", plugin)
        self.assertIn("MutationObserver", plugin)
        self.assertIn("backdrop-filter", plugin)
        self.assertIn("120 hand-built glass styles", plugin)
        self.assertIn("name: 'Hermes Liquid Glass'", plugin)
        self.assertNotIn("Hermes Liquid Glass Packs", plugin)
        self.assertIn("Smoked Hearth", index)
        self.assertEqual(contact_sheet.count('class="theme-card"'), 120)


if __name__ == "__main__":
    unittest.main()
