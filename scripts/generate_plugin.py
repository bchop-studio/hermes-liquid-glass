#!/usr/bin/env python3
"""Generate the installable plugin and theme indexes from the palette catalog."""

from __future__ import annotations

import argparse
import html
import json
from pathlib import Path
from typing import Any

from audit_palettes import audit_catalog, blend, contrast

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "palettes" / "liquid-glass-palettes.json"
PLUGIN = ROOT / "desktop-plugin" / "hermes-liquid-glass-packs" / "plugin.js"
INDEX = ROOT / "themes" / "README.md"
CONTACT = ROOT / "themes" / "contact-sheet.html"


def readable(background: str) -> str:
    return "#000000" if contrast("#000000", background) >= contrast("#ffffff", background) else "#ffffff"


def js_theme(theme: dict[str, Any]) -> str:
    colors = theme["colors"]
    glass = theme["glass"]
    muted = blend(colors["glassTint"], colors["background"], 0.55)
    strong = blend(colors["glassTint"], colors["background"], glass["strongOpacity"])
    prefix = f"lg-{theme['id']}"
    return f"""  {{
    name: '{prefix}', label: {json.dumps(theme['name'])}, description: {json.dumps(theme['glassCharacter'].replace('-', ' '))}, mode: '{theme['mode']}',
    colors: {{
      background: '{colors['background']}', foreground: '{colors['foreground']}', card: '{strong}', cardForeground: '{colors['foreground']}',
      muted: '{muted}', mutedForeground: '{colors['mutedForeground']}', popover: '{strong}', popoverForeground: '{colors['foreground']}',
      primary: '{colors['primary']}', primaryForeground: '{readable(colors['primary'])}', secondary: '{colors['selection']}', secondaryForeground: '{readable(colors['selection'])}',
      accent: '{colors['tool']}', accentForeground: '{readable(colors['tool'])}', border: '{colors['rim']}', input: '{strong}', ring: '{colors['accent']}',
      midground: '{colors['accent']}', midgroundForeground: '{readable(colors['accent'])}', composerRing: '{colors['accent']}',
      destructive: '{colors['error']}', destructiveForeground: '{readable(colors['error'])}', sidebarBackground: '{strong}', sidebarBorder: '{colors['rim']}',
      userBubble: '{colors['selection']}', userBubbleBorder: '{colors['accent']}'
    }},
    darkColors: null,
    terminal: {{
      foreground: '{colors['foreground']}', cursor: '{colors['accent']}', selectionBackground: '{colors['selection']}', black: '{colors['background']}',
      red: '{colors['error']}', green: '{colors['success']}', yellow: '{colors['warning']}', blue: '{colors['tool']}', magenta: '{colors['primary']}', cyan: '{colors['accent']}', white: '{colors['foreground']}',
      brightBlack: '{colors['mutedForeground']}', brightRed: '{colors['error']}', brightGreen: '{colors['success']}', brightYellow: '{colors['warning']}',
      brightBlue: '{colors['tool']}', brightMagenta: '{colors['primary']}', brightCyan: '{colors['accent']}', brightWhite: '{colors['foreground']}'
    }},
    semantic: {{ ok: '{colors['success']}', warn: '{colors['warning']}', error: '{colors['error']}', tool: '{colors['tool']}' }},
    glass: {{ backgroundGlow: '{colors['backgroundGlow']}', tint: '{colors['glassTint']}', rim: '{colors['rim']}', blurPx: {glass['blurPx']}, saturation: {glass['saturation']}, surfaceOpacity: {glass['surfaceOpacity']}, strongOpacity: {glass['strongOpacity']}, rimOpacity: {glass['rimOpacity']}, glowOpacity: {glass['glowOpacity']} }}
  }},"""


def plugin_source(themes: list[dict[str, Any]]) -> str:
    blocks = "\n".join(js_theme(theme) for theme in themes)
    return f"""import {{ ROUTES_AREA, SIDEBAR_NAV_AREA }} from '@hermes/plugin-sdk'
import {{ jsx, jsxs }} from 'react/jsx-runtime'

const ID = 'hermes-liquid-glass-packs'
const USER_THEMES_KEY = 'hermes-desktop-user-themes-v1'
const ACTIVE_THEME_KEY = 'hermes-desktop-theme-v2'
const STYLE_ID = 'hermes-liquid-glass-packs-style'
const OWNED_KEYS = [
  '--ui-cyan', '--ui-blue', '--ui-green', '--ui-yellow', '--ui-orange', '--ui-red', '--ui-purple', '--ui-warm',
  '--ui-selection-background', '--ui-chat-surface-background', '--ui-sidebar-surface-background', '--ui-bg-card', '--ui-bg-elevated',
  '--ui-bg-editor', '--lg-background', '--lg-background-glow', '--lg-glass-tint', '--lg-rim', '--lg-blur', '--lg-saturation',
  '--lg-surface-opacity', '--lg-strong-opacity', '--lg-rim-opacity', '--lg-glow-opacity', '--lg-tab-strip-background',
  '--lg-tab-active-background'
]

const fullThemes = [
{blocks}
]

for (const theme of fullThemes) theme.darkColors = theme.colors

function ensureGlassStyle() {{
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    :root[data-liquid-glass-owned='1'] body {{
      background-color: var(--lg-background);
      background-image:
        radial-gradient(70rem 42rem at 8% -10%, color-mix(in srgb, var(--lg-background-glow) 72%, transparent), transparent 68%),
        radial-gradient(55rem 38rem at 94% 8%, color-mix(in srgb, var(--ui-accent) 28%, transparent), transparent 66%),
        linear-gradient(155deg, color-mix(in srgb, var(--lg-glass-tint) 58%, var(--lg-background)), var(--lg-background));
      background-attachment: fixed;
    }}
    :root[data-liquid-glass-owned='1'] :where([role='dialog'], [data-radix-popper-content-wrapper] > *, aside) {{
      backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturation));
      -webkit-backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturation));
      box-shadow: inset 0 1px 0 color-mix(in srgb, var(--lg-rim) calc(var(--lg-rim-opacity) * 100%), transparent), 0 18px 46px color-mix(in srgb, var(--lg-background) 58%, transparent);
    }}
    :root[data-liquid-glass-owned='1'] [data-liquid-glass-preview='1'] {{
      backdrop-filter: blur(18px) saturate(1.2);
      -webkit-backdrop-filter: blur(18px) saturate(1.2);
    }}
    :root[data-liquid-glass-owned='1'] [data-slot='aui_user-message-root'] {{
      --ui-chat-surface-background: transparent !important;
      background: transparent !important;
    }}
    :root[data-liquid-glass-owned='1'] [data-slot='aui_user-message-root']::before {{
      background: transparent !important;
    }}
    :root[data-liquid-glass-owned='1'] :where([role='tablist'], [data-slot='tabs-list'], [data-zone-tabstrip]) {{
      background-color: var(--lg-tab-strip-background) !important;
      backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturation));
      -webkit-backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturation));
      box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--lg-rim) 42%, transparent);
    }}
    :root[data-liquid-glass-owned='1'] :where([role='tab'], [data-slot='tabs-trigger']) {{
      --tab-bg: transparent !important;
      background-color: transparent !important;
      color: var(--ui-text-secondary) !important;
    }}
    :root[data-liquid-glass-owned='1'] :where(
      [role='tab'][aria-selected='true'],
      [role='tab'][data-active='true'],
      [role='tab'][data-state='active'],
      [data-slot='tabs-trigger'][data-state='active']
    ) {{
      --tab-bg: var(--lg-tab-active-background) !important;
      background-color: var(--lg-tab-active-background) !important;
      color: var(--theme-foreground) !important;
      box-shadow: inset 0 -2px 0 var(--theme-primary), inset 0 1px 0 color-mix(in srgb, var(--lg-rim) 55%, transparent) !important;
    }}
    @media (prefers-reduced-motion: reduce) {{
      :root[data-liquid-glass-owned='1'] * {{ transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }}
    }}
  `
  document.head.appendChild(style)
}}

function readUserThemes() {{
  try {{ return JSON.parse(window.localStorage.getItem(USER_THEMES_KEY) || '{{}}') }} catch {{ return {{}} }}
}}

function installPackThemes() {{
  const stored = readUserThemes()
  let changed = false
  for (const theme of fullThemes) {{
    if (JSON.stringify(stored[theme.name]) !== JSON.stringify(theme)) {{
      stored[theme.name] = theme
      changed = true
    }}
  }}
  if (changed) window.localStorage.setItem(USER_THEMES_KEY, JSON.stringify(stored))
}}

function clearOwnedStyles(root) {{
  for (const key of OWNED_KEYS) root.style.removeProperty(key)
  delete root.dataset.liquidGlassOwned
}}

function applyGlassPalette() {{
  const root = document.documentElement
  const activeName = root.dataset.hermesTheme || ''
  const theme = fullThemes.find(candidate => candidate.name === activeName)
  if (!theme) {{
    if (root.dataset.liquidGlassOwned === '1') clearOwnedStyles(root)
    return
  }}
  ensureGlassStyle()
  const {{ colors, semantic, glass }} = theme
  const values = {{
    '--ui-cyan': semantic.tool, '--ui-blue': semantic.tool, '--ui-green': semantic.ok, '--ui-yellow': semantic.warn,
    '--ui-orange': semantic.warn, '--ui-red': semantic.error, '--ui-purple': colors.primary, '--ui-warm': colors.primary,
    '--ui-selection-background': `color-mix(in srgb, ${{colors.accent}} 38%, transparent)`,
    '--ui-chat-surface-background': `color-mix(in srgb, ${{glass.tint}} ${{Math.round(glass.surfaceOpacity * 100)}}%, transparent)`,
    '--ui-sidebar-surface-background': `color-mix(in srgb, ${{glass.tint}} ${{Math.round(glass.strongOpacity * 100)}}%, transparent)`,
    '--ui-bg-card': `color-mix(in srgb, ${{glass.tint}} ${{Math.round(glass.surfaceOpacity * 100)}}%, transparent)`,
    '--ui-bg-elevated': `color-mix(in srgb, ${{glass.tint}} ${{Math.round(glass.strongOpacity * 100)}}%, transparent)`,
    '--ui-bg-editor': `color-mix(in srgb, ${{glass.tint}} ${{Math.round(glass.strongOpacity * 100)}}%, transparent)`,
    '--lg-background': colors.background, '--lg-background-glow': glass.backgroundGlow, '--lg-glass-tint': glass.tint, '--lg-rim': glass.rim,
    '--lg-blur': `${{glass.blurPx}}px`, '--lg-saturation': String(glass.saturation), '--lg-surface-opacity': String(glass.surfaceOpacity),
    '--lg-strong-opacity': String(glass.strongOpacity), '--lg-rim-opacity': String(glass.rimOpacity), '--lg-glow-opacity': String(glass.glowOpacity),
    '--lg-tab-strip-background': `color-mix(in srgb, ${{glass.tint}} 42%, transparent)`,
    '--lg-tab-active-background': `color-mix(in srgb, ${{colors.midground}} 22%, color-mix(in srgb, ${{glass.tint}} 38%, transparent))`
  }}
  for (const [key, value] of Object.entries(values)) root.style.setProperty(key, value)
  root.dataset.liquidGlassOwned = '1'
}}

function watchActivePack() {{
  applyGlassPalette()
  const observer = new MutationObserver(applyGlassPalette)
  observer.observe(document.documentElement, {{ attributes: true, attributeFilter: ['data-hermes-theme', 'class'] }})
}}

function applyPack(themeName) {{
  installPackThemes()
  window.localStorage.setItem(ACTIVE_THEME_KEY, themeName)
  window.location.reload()
}}

function ThemeTile({{ theme }}) {{
  const active = window.localStorage.getItem(ACTIVE_THEME_KEY) === theme.name
  const colors = theme.colors
  return jsxs('button', {{
    type: 'button',
    'aria-pressed': active,
    onClick: () => applyPack(theme.name),
    className: 'group overflow-hidden rounded-2xl border p-3 text-left transition-transform hover:-translate-y-0.5 focus-visible:outline-none',
    style: {{
      color: colors.foreground,
      borderColor: active ? colors.accent : colors.border,
      background: `radial-gradient(circle at 16% 0%, ${{theme.glass.backgroundGlow}}, transparent 62%), ${{colors.background}}`,
      boxShadow: active ? `0 0 0 2px ${{colors.accent}}, 0 16px 34px ${{colors.background}}88` : `0 12px 28px ${{colors.background}}66`
    }},
    children: [
      jsxs('div', {{
        'data-liquid-glass-preview': '1',
        className: 'mb-3 h-16 rounded-xl border p-2',
        style: {{ background: `${{theme.glass.tint}}aa`, borderColor: theme.glass.rim, boxShadow: `inset 0 1px 0 ${{theme.glass.rim}}, inset 0 -24px 34px ${{theme.glass.backgroundGlow}}55` }},
        children: [
          jsx('div', {{ className: 'h-2 w-3/5 rounded-full', style: {{ background: colors.primary }} }}),
          jsx('div', {{ className: 'mt-2 h-2 w-2/5 rounded-full', style: {{ background: colors.accent }} }}),
          jsx('div', {{ className: 'mt-2 h-1.5 w-4/5 rounded-full opacity-70', style: {{ background: colors.foreground }} }})
        ]
      }}),
      jsx('span', {{ className: 'block text-sm font-semibold', children: theme.label }}),
      jsx('span', {{ className: 'mt-1 block text-xs opacity-75', children: theme.description }}),
      active ? jsx('span', {{ className: 'mt-2 block text-xs font-medium', style: {{ color: colors.accent }}, children: 'Active' }}) : null
    ]
  }})
}}

function PackPage() {{
  return jsxs('main', {{
    className: 'h-full overflow-auto p-6',
    children: [
      jsx('div', {{ className: 'text-xs font-medium uppercase tracking-[0.22em] text-(--ui-accent)', children: 'Hermes Desktop' }}),
      jsx('h1', {{ className: 'mt-2 text-2xl font-semibold tracking-tight', children: 'Liquid Glass' }}),
      jsx('p', {{ className: 'mt-2 max-w-2xl text-sm text-(--ui-text-secondary)', children: '{len(themes)} hand-built glass styles. Pick one and the whole app repaints.' }}),
      jsx('div', {{ className: 'mt-6 grid gap-3', style: {{ gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))' }}, children: fullThemes.map(theme => jsx(ThemeTile, {{ theme }}, theme.name)) }})
    ]
  }})
}}

export default {{
  id: ID,
  name: 'Hermes Liquid Glass',
  description: 'Distinct liquid-glass themes for Hermes Desktop.',
  defaultEnabled: true,
  register(ctx) {{
    installPackThemes()
    watchActivePack()
    ctx.registerMany([
      {{ id: 'page', area: ROUTES_AREA, data: {{ path: '/liquid-glass' }}, title: 'Liquid Glass', render: () => jsx(PackPage, {{}}) }},
      {{ id: 'nav', area: SIDEBAR_NAV_AREA, order: 58, data: {{ path: '/liquid-glass', label: 'Liquid Glass', codicon: 'layers' }} }}
    ])
  }}
}}
"""


def index_source(themes: list[dict[str, Any]]) -> str:
    lines = [
        "# Liquid Glass Themes", "",
        f"{len(themes)} hand-built liquid-glass themes for Hermes Desktop.", "",
        "| Theme | Mode | Surface | Accent | Glass character |", "|---|---|---|---|---|",
    ]
    for theme in themes:
        lines.append(f"| {theme['name']} | {theme['mode']} | {theme['surfaceFamily']} | {theme['accentFamily']} | {theme['glassCharacter']} |")
    return "\n".join(lines) + "\n"


def contact_source(themes: list[dict[str, Any]]) -> str:
    cards = []
    for theme in themes:
        colors = theme["colors"]
        glass = theme["glass"]
        cards.append(f"""<article class="theme-card" style="--bg:{colors['background']};--glow:{colors['backgroundGlow']};--glass:{colors['glassTint']};--fg:{colors['foreground']};--muted:{colors['mutedForeground']};--primary:{colors['primary']};--accent:{colors['accent']};--rim:{colors['rim']};--blur:{glass['blurPx']}px">
  <div class="glass"><i></i><b>{html.escape(theme['name'])}</b><span>{html.escape(theme['glassCharacter'].replace('-', ' '))}</span><div class="signals"><em></em><em></em><em></em><em></em></div></div>
</article>""")
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Liquid Glass Themes</title>
<style>
*{{box-sizing:border-box}}body{{margin:0;padding:24px;background:#0b0b0d;color:#eee;font:14px system-ui}}h1{{font-size:22px}}main{{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:16px}}.theme-card{{min-height:180px;padding:18px;border-radius:22px;background:radial-gradient(circle at 12% 0,var(--glow),transparent 64%),linear-gradient(150deg,var(--glass),var(--bg));overflow:hidden}}.glass{{height:100%;min-height:144px;padding:18px;border:1px solid var(--rim);border-radius:18px;background:color-mix(in srgb,var(--glass) 68%,transparent);color:var(--fg);backdrop-filter:blur(var(--blur)) saturate(1.2);box-shadow:inset 0 1px 0 color-mix(in srgb,var(--fg) 22%,transparent),inset 0 -42px 60px color-mix(in srgb,var(--glow) 24%,transparent),0 18px 35px color-mix(in srgb,var(--bg) 65%,transparent)}}i{{display:block;width:10px;height:10px;border-radius:50%;background:var(--accent);box-shadow:0 0 16px var(--accent)}}b,span{{display:block}}b{{margin-top:18px;font-size:17px}}span{{margin-top:5px;color:var(--muted)}}.signals{{display:flex;gap:6px;margin-top:22px}}em{{width:28px;height:6px;border-radius:9px;background:var(--primary)}}em:nth-child(2){{background:var(--accent)}}em:nth-child(3){{background:var(--rim)}}em:nth-child(4){{background:var(--fg)}}
</style></head><body><h1>Hermes Liquid Glass</h1><main>{''.join(cards)}</main></body></html>"""


def generate_outputs(catalog: dict[str, Any]) -> tuple[str, str, str]:
    report = audit_catalog(catalog, expected_count=len(catalog.get("themes", [])))
    if any(report[key] for key in ("duplicate_signatures", "duplicate_recipes", "contrast_failures", "perceptual_failures", "expansion_distance_failures", "catalog_expansion_distance_failures", "reused_colors")):
        raise ValueError(json.dumps(report, indent=2))
    themes = catalog["themes"]
    return plugin_source(themes), index_source(themes), contact_source(themes)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    plugin, index, contact = generate_outputs(catalog)
    outputs = ((PLUGIN, plugin), (INDEX, index), (CONTACT, contact))
    if args.check:
        stale = [str(path.relative_to(ROOT)) for path, content in outputs if not path.exists() or path.read_text(encoding="utf-8") != content]
        if stale:
            raise SystemExit("Generated files are stale: " + ", ".join(stale))
        print(f"generated file check passed: {len(catalog['themes'])} themes")
        return
    for path, content in outputs:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
    print(f"generated {len(catalog['themes'])} liquid-glass themes")


if __name__ == "__main__":
    main()
