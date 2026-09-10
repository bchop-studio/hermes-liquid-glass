import assert from 'node:assert/strict'
import { mkdtemp, readFile, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(import.meta.dirname, '..')
const PLUGIN = process.env.PLUGIN_UNDER_TEST || path.join(ROOT, 'desktop-plugin', 'hermes-liquid-glass-packs', 'plugin.js')

function makeHarness() {
  const storage = new Map()
  const properties = new Map()
  const styles = new Map()
  let reloads = 0
  let observerCallback = null

  globalThis.window = {
    localStorage: {
      getItem: key => storage.has(key) ? storage.get(key) : null,
      setItem: (key, value) => storage.set(key, String(value))
    },
    location: { reload: () => { reloads += 1 } }
  }
  globalThis.document = {
    documentElement: {
      dataset: { hermesTheme: 'lg-smoked-hearth' },
      style: {
        setProperty: (key, value) => properties.set(key, String(value)),
        removeProperty: key => properties.delete(key)
      }
    },
    head: { appendChild: node => styles.set(node.id, node) },
    createElement: tag => ({ tag, id: '', textContent: '' }),
    getElementById: id => styles.get(id) || null
  }
  globalThis.MutationObserver = class {
    constructor(callback) { observerCallback = callback }
    observe() {}
  }

  return {
    storage,
    properties,
    styles,
    reloads: () => reloads,
    notifyThemeChange: () => observerCallback()
  }
}

async function importPlugin() {
  let source = await readFile(PLUGIN, 'utf8')
  source = source.replace(
    "import { ROUTES_AREA, SIDEBAR_NAV_AREA } from '@hermes/plugin-sdk'",
    "const ROUTES_AREA = 'routes'; const SIDEBAR_NAV_AREA = 'sidebar-nav'"
  )
  source = source.replace(
    "import { jsx, jsxs } from 'react/jsx-runtime'",
    "const jsx = (type, props, key) => ({ type, props: props || {}, key }); const jsxs = jsx"
  )
  const temp = await mkdtemp(path.join(os.tmpdir(), 'liquid-glass-plugin-'))
  const modulePath = path.join(temp, 'plugin.mjs')
  await writeFile(modulePath, source)
  return (await import(pathToFileURL(modulePath).href)).default
}

test('real generated plugin installs, applies, selects, and cleans up themes', async () => {
  const harness = makeHarness()
  const plugin = await importPlugin()
  const registrations = []

  plugin.register({ registerMany: values => registrations.push(...values) })

  const installed = JSON.parse(harness.storage.get('hermes-desktop-user-themes-v1'))
  const catalog = JSON.parse(await readFile(path.join(ROOT, 'palettes', 'liquid-glass-palettes.json'), 'utf8'))
  assert.equal(Object.keys(installed).length, 120)
  for (const source of catalog.themes) {
    const theme = installed[`lg-${source.id}`]
    assert.equal(theme.colors.primary, source.colors.primary, `${source.id} primary`)
    assert.equal(theme.colors.midground, source.colors.accent, `${source.id} main accent`)
    assert.equal(theme.colors.accent, source.colors.tool, `${source.id} tool accent`)
    assert.equal(theme.colors.border, source.colors.rim, `${source.id} rim`)
    assert.equal(theme.colors.secondary, source.colors.selection, `${source.id} selection`)
    assert.equal(theme.glass.backgroundGlow, source.colors.backgroundGlow, `${source.id} background glow`)
  }
  assert.equal(registrations.length, 2)
  assert.equal(registrations[0].data.path, '/liquid-glass')
  assert.equal(document.documentElement.dataset.liquidGlassOwned, '1')
  assert.equal(harness.properties.get('--lg-glass-tint'), '#2e1c24')
  assert.ok(harness.styles.has('hermes-liquid-glass-packs-style'))
  const glassCss = harness.styles.get('hermes-liquid-glass-packs-style').textContent
  assert.match(glassCss, /\[role='tablist'\]/)
  assert.match(glassCss, /\[role='tab'\]/)
  assert.match(glassCss, /\[data-slot='tabs-list'\]/)
  assert.match(glassCss, /\[data-slot='tabs-trigger'\]/)
  assert.match(glassCss, /\[data-zone-tabstrip\]/)
  assert.match(glassCss, /--lg-tab-strip-background/)
  assert.match(glassCss, /--lg-tab-active-background/)
  assert.match(glassCss, /\[data-slot='aui_user-message-root'\]/)
  assert.match(glassCss, /--ui-chat-surface-background: transparent !important/)
  assert.match(glassCss, /background: transparent !important/)
  assert.match(glassCss, /\[data-slot='aui_user-message-root'\]::before/)

  for (const source of catalog.themes) {
    document.documentElement.dataset.hermesTheme = `lg-${source.id}`
    harness.notifyThemeChange()
    assert.equal(
      harness.properties.get('--lg-tab-strip-background'),
      `color-mix(in srgb, ${source.colors.glassTint} 42%, transparent)`,
      `${source.id} tab strip`
    )
    assert.equal(
      harness.properties.get('--lg-tab-active-background'),
      `color-mix(in srgb, ${source.colors.accent} 22%, color-mix(in srgb, ${source.colors.glassTint} 38%, transparent))`,
      `${source.id} active tab`
    )
  }

  document.documentElement.dataset.hermesTheme = 'lg-smoked-hearth'
  harness.notifyThemeChange()
  const pageElement = registrations[0].render()
  const pageTree = pageElement.type(pageElement.props)
  const grid = pageTree.props.children[3]
  const firstTileElement = grid.props.children[0]
  const firstTile = firstTileElement.type(firstTileElement.props)
  firstTile.props.onClick()

  assert.equal(harness.storage.get('hermes-desktop-theme-v2'), 'lg-smoked-hearth')
  assert.equal(harness.reloads(), 1)

  document.documentElement.dataset.hermesTheme = 'nous'
  harness.notifyThemeChange()
  assert.equal(document.documentElement.dataset.liquidGlassOwned, undefined)
  assert.equal(harness.properties.has('--lg-glass-tint'), false)
  assert.equal(harness.properties.has('--ui-green'), false)
})
