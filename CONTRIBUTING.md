# Contributing

Hermes Liquid Glass is generated from `palettes/liquid-glass-palettes.json`. Change the catalog, never the generated `plugin.js` by hand.

## Add or change a theme

1. Give it a unique id, name, surface family, accent family, glass character, full color set, and glass recipe.
2. Run `python3 scripts/audit_palettes.py`.
3. Run `python3 scripts/generate_plugin.py`.
4. Run the Python and Node checks from the README.
5. Compare it against every existing theme in `themes/contact-sheet.html`.

The catalog must remain exactly 120 themes. Replace a theme instead of silently growing the pack.

## Rules

- Never reuse a source color anywhere in the catalog, including inside one theme.
- Do not lower either perceptual-distance threshold to make a near-copy pass. Themes 51 through 100 must clear the stricter foundation gate against every original theme. Themes 101 through 120 must also clear that stricter gate against all 100 approved themes. Redesign the palette instead.
- Normal text must meet a 4.5:1 contrast ratio. Large text and visible controls must meet 3:1.
- A theme needs real glass depth: translucent surfaces, blur, a rim, a glow, and layered background light.
- Theme styles must clean themselves up after switching to a normal Hermes theme.
- This plugin changes Hermes Desktop only. It must never touch the operating system, wallpaper, cursor, icons, registry, or terminal settings.
