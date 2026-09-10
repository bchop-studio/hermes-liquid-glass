import { ROUTES_AREA, SIDEBAR_NAV_AREA } from '@hermes/plugin-sdk'
import { jsx, jsxs } from 'react/jsx-runtime'

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
  {
    name: 'lg-smoked-hearth', label: "Smoked Hearth", description: "smoked warm", mode: 'dark',
    colors: {
      background: '#0e090b', foreground: '#efe6d8', card: '#22151a', cardForeground: '#efe6d8',
      muted: '#201319', mutedForeground: '#aaa2a8', popover: '#22151a', popoverForeground: '#efe6d8',
      primary: '#e39a5f', primaryForeground: '#000000', secondary: '#5a352b', secondaryForeground: '#ffffff',
      accent: '#9fb3c2', accentForeground: '#000000', border: '#8d7468', input: '#22151a', ring: '#cdb26f',
      midground: '#cdb26f', midgroundForeground: '#000000', composerRing: '#cdb26f',
      destructive: '#f07b58', destructiveForeground: '#000000', sidebarBackground: '#22151a', sidebarBorder: '#8d7468',
      userBubble: '#5a352b', userBubbleBorder: '#cdb26f'
    },
    darkColors: null,
    terminal: {
      foreground: '#efe6d8', cursor: '#cdb26f', selectionBackground: '#5a352b', black: '#0e090b',
      red: '#f07b58', green: '#ceb370', yellow: '#e49b60', blue: '#9fb3c2', magenta: '#e39a5f', cyan: '#cdb26f', white: '#efe6d8',
      brightBlack: '#aaa2a8', brightRed: '#f07b58', brightGreen: '#ceb370', brightYellow: '#e49b60',
      brightBlue: '#9fb3c2', brightMagenta: '#e39a5f', brightCyan: '#cdb26f', brightWhite: '#efe6d8'
    },
    semantic: { ok: '#ceb370', warn: '#e49b60', error: '#f07b58', tool: '#9fb3c2' },
    glass: { backgroundGlow: '#3a222a', tint: '#2e1c24', rim: '#8d7468', blurPx: 18, saturation: 1.18, surfaceOpacity: 0.46, strongOpacity: 0.62, rimOpacity: 0.22, glowOpacity: 0.16 }
  },
  {
    name: 'lg-arctic-lens', label: "Arctic Lens", description: "clear cool", mode: 'light',
    colors: {
      background: '#e8f4fb', foreground: '#10243a', card: '#dbeef7', cardForeground: '#10243a',
      muted: '#def0f8', mutedForeground: '#405b70', popover: '#dbeef7', popoverForeground: '#10243a',
      primary: '#1f5fbf', primaryForeground: '#ffffff', secondary: '#b9dcf0', secondaryForeground: '#000000',
      accent: '#006f9c', accentForeground: '#ffffff', border: '#648aa3', input: '#dbeef7', ring: '#007d99',
      midground: '#007d99', midgroundForeground: '#ffffff', composerRing: '#007d99',
      destructive: '#b4233a', destructiveForeground: '#ffffff', sidebarBackground: '#dbeef7', sidebarBorder: '#648aa3',
      userBubble: '#b9dcf0', userBubbleBorder: '#007d99'
    },
    darkColors: null,
    terminal: {
      foreground: '#10243a', cursor: '#007d99', selectionBackground: '#b9dcf0', black: '#e8f4fb',
      red: '#b4233a', green: '#167a65', yellow: '#925500', blue: '#006f9c', magenta: '#1f5fbf', cyan: '#007d99', white: '#10243a',
      brightBlack: '#405b70', brightRed: '#b4233a', brightGreen: '#167a65', brightYellow: '#925500',
      brightBlue: '#006f9c', brightMagenta: '#1f5fbf', brightCyan: '#007d99', brightWhite: '#10243a'
    },
    semantic: { ok: '#167a65', warn: '#925500', error: '#b4233a', tool: '#006f9c' },
    glass: { backgroundGlow: '#a9d9ee', tint: '#d6ecf6', rim: '#648aa3', blurPx: 24, saturation: 1.08, surfaceOpacity: 0.56, strongOpacity: 0.72, rimOpacity: 0.42, glowOpacity: 0.12 }
  },
  {
    name: 'lg-verdant-resin', label: "Verdant Resin", description: "dense organic", mode: 'dark',
    colors: {
      background: '#07140f', foreground: '#e8f6ee', card: '#0f291f', cardForeground: '#e8f6ee',
      muted: '#0d241c', mutedForeground: '#9cb8a8', popover: '#0f291f', popoverForeground: '#e8f6ee',
      primary: '#3ccf83', primaryForeground: '#000000', secondary: '#214d3a', secondaryForeground: '#ffffff',
      accent: '#65c9c1', accentForeground: '#000000', border: '#668b78', input: '#0f291f', ring: '#a8e85c',
      midground: '#a8e85c', midgroundForeground: '#000000', composerRing: '#a8e85c',
      destructive: '#ef6c72', destructiveForeground: '#000000', sidebarBackground: '#0f291f', sidebarBorder: '#668b78',
      userBubble: '#214d3a', userBubbleBorder: '#a8e85c'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8f6ee', cursor: '#a8e85c', selectionBackground: '#214d3a', black: '#07140f',
      red: '#ef6c72', green: '#55d69b', yellow: '#efc75e', blue: '#65c9c1', magenta: '#3ccf83', cyan: '#a8e85c', white: '#e8f6ee',
      brightBlack: '#9cb8a8', brightRed: '#ef6c72', brightGreen: '#55d69b', brightYellow: '#efc75e',
      brightBlue: '#65c9c1', brightMagenta: '#3ccf83', brightCyan: '#a8e85c', brightWhite: '#e8f6ee'
    },
    semantic: { ok: '#55d69b', warn: '#efc75e', error: '#ef6c72', tool: '#65c9c1' },
    glass: { backgroundGlow: '#183b2d', tint: '#123226', rim: '#668b78', blurPx: 14, saturation: 1.3, surfaceOpacity: 0.52, strongOpacity: 0.69, rimOpacity: 0.25, glowOpacity: 0.2 }
  },
  {
    name: 'lg-solar-amber', label: "Solar Amber", description: "molten clear", mode: 'light',
    colors: {
      background: '#f8e5bc', foreground: '#33200c', card: '#f3daa4', cardForeground: '#33200c',
      muted: '#f5ddac', mutedForeground: '#6b4c2c', popover: '#f3daa4', popoverForeground: '#33200c',
      primary: '#a24f0a', primaryForeground: '#ffffff', secondary: '#eccd89', secondaryForeground: '#000000',
      accent: '#6046a8', accentForeground: '#ffffff', border: '#8f6a35', input: '#f3daa4', ring: '#765600',
      midground: '#765600', midgroundForeground: '#ffffff', composerRing: '#765600',
      destructive: '#a62c32', destructiveForeground: '#ffffff', sidebarBackground: '#f3daa4', sidebarBorder: '#8f6a35',
      userBubble: '#eccd89', userBubbleBorder: '#765600'
    },
    darkColors: null,
    terminal: {
      foreground: '#33200c', cursor: '#765600', selectionBackground: '#eccd89', black: '#f8e5bc',
      red: '#a62c32', green: '#39734a', yellow: '#8a4d00', blue: '#6046a8', magenta: '#a24f0a', cyan: '#765600', white: '#33200c',
      brightBlack: '#6b4c2c', brightRed: '#a62c32', brightGreen: '#39734a', brightYellow: '#8a4d00',
      brightBlue: '#6046a8', brightMagenta: '#a24f0a', brightCyan: '#765600', brightWhite: '#33200c'
    },
    semantic: { ok: '#39734a', warn: '#8a4d00', error: '#a62c32', tool: '#6046a8' },
    glass: { backgroundGlow: '#f2b45d', tint: '#f2d79e', rim: '#8f6a35', blurPx: 12, saturation: 1.22, surfaceOpacity: 0.61, strongOpacity: 0.79, rimOpacity: 0.48, glowOpacity: 0.24 }
  },
  {
    name: 'lg-ultraviolet-ink', label: "Ultraviolet Ink", description: "inky neon", mode: 'dark',
    colors: {
      background: '#0b0714', foreground: '#f2eaff', card: '#1a0d28', cardForeground: '#f2eaff',
      muted: '#190d27', mutedForeground: '#b1a0c6', popover: '#1a0d28', popoverForeground: '#f2eaff',
      primary: '#d066ff', primaryForeground: '#000000', secondary: '#3a1f58', secondaryForeground: '#ffffff',
      accent: '#52d7e8', accentForeground: '#000000', border: '#8060a0', input: '#1a0d28', ring: '#6d9cff',
      midground: '#6d9cff', midgroundForeground: '#000000', composerRing: '#6d9cff',
      destructive: '#ff5c7a', destructiveForeground: '#000000', sidebarBackground: '#1a0d28', sidebarBorder: '#8060a0',
      userBubble: '#3a1f58', userBubbleBorder: '#6d9cff'
    },
    darkColors: null,
    terminal: {
      foreground: '#f2eaff', cursor: '#6d9cff', selectionBackground: '#3a1f58', black: '#0b0714',
      red: '#ff5c7a', green: '#55d99a', yellow: '#f2c14f', blue: '#52d7e8', magenta: '#d066ff', cyan: '#6d9cff', white: '#f2eaff',
      brightBlack: '#b1a0c6', brightRed: '#ff5c7a', brightGreen: '#55d99a', brightYellow: '#f2c14f',
      brightBlue: '#52d7e8', brightMagenta: '#d066ff', brightCyan: '#6d9cff', brightWhite: '#f2eaff'
    },
    semantic: { ok: '#55d99a', warn: '#f2c14f', error: '#ff5c7a', tool: '#52d7e8' },
    glass: { backgroundGlow: '#341359', tint: '#241237', rim: '#8060a0', blurPx: 28, saturation: 1.45, surfaceOpacity: 0.4, strongOpacity: 0.58, rimOpacity: 0.3, glowOpacity: 0.32 }
  },
  {
    name: 'lg-garnet-haze', label: "Garnet Haze", description: "wine diffuse", mode: 'dark',
    colors: {
      background: '#270f13', foreground: '#f3efef', card: '#381315', cardForeground: '#f3efef',
      muted: '#311114', mutedForeground: '#cbb9bb', popover: '#381315', popoverForeground: '#f3efef',
      primary: '#84e7f0', primaryForeground: '#000000', secondary: '#691411', secondaryForeground: '#ffffff',
      accent: '#7d8bf2', accentForeground: '#000000', border: '#e06242', input: '#381315', ring: '#a27ff2',
      midground: '#a27ff2', midgroundForeground: '#000000', composerRing: '#a27ff2',
      destructive: '#ef917e', destructiveForeground: '#000000', sidebarBackground: '#381315', sidebarBorder: '#e06242',
      userBubble: '#691411', userBubbleBorder: '#a27ff2'
    },
    darkColors: null,
    terminal: {
      foreground: '#f3efef', cursor: '#a27ff2', selectionBackground: '#691411', black: '#270f13',
      red: '#ef917e', green: '#6de9db', yellow: '#eaf084', blue: '#7d8bf2', magenta: '#84e7f0', cyan: '#a27ff2', white: '#f3efef',
      brightBlack: '#cbb9bb', brightRed: '#ef917e', brightGreen: '#6de9db', brightYellow: '#eaf084',
      brightBlue: '#7d8bf2', brightMagenta: '#84e7f0', brightCyan: '#a27ff2', brightWhite: '#f3efef'
    },
    semantic: { ok: '#6de9db', warn: '#eaf084', error: '#ef917e', tool: '#7d8bf2' },
    glass: { backgroundGlow: '#872414', tint: '#3a1315', rim: '#e06242', blurPx: 20, saturation: 1.33, surfaceOpacity: 0.58, strongOpacity: 0.9, rimOpacity: 0.42, glowOpacity: 0.28 }
  },
  {
    name: 'lg-sapphire-vapor', label: "Sapphire Vapor", description: "blue vapor", mode: 'dark',
    colors: {
      background: '#060a11', foreground: '#e6e7ea', card: '#0f1836', cardForeground: '#e6e7ea',
      muted: '#0d152d', mutedForeground: '#9da5b9', popover: '#0f1836', popoverForeground: '#e6e7ea',
      primary: '#ecb465', primaryForeground: '#000000', secondary: '#0f1d78', secondaryForeground: '#ffffff',
      accent: '#7d76e5', accentForeground: '#000000', border: '#2822d3', input: '#0f1836', ring: '#bff06a',
      midground: '#bff06a', midgroundForeground: '#000000', composerRing: '#bff06a',
      destructive: '#ec8869', destructiveForeground: '#000000', sidebarBackground: '#0f1836', sidebarBorder: '#2822d3',
      userBubble: '#0f1d78', userBubbleBorder: '#bff06a'
    },
    darkColors: null,
    terminal: {
      foreground: '#e6e7ea', cursor: '#bff06a', selectionBackground: '#0f1d78', black: '#060a11',
      red: '#ec8869', green: '#66d693', yellow: '#ecbf65', blue: '#7d76e5', magenta: '#ecb465', cyan: '#bff06a', white: '#e6e7ea',
      brightBlack: '#9da5b9', brightRed: '#ec8869', brightGreen: '#66d693', brightYellow: '#ecbf65',
      brightBlue: '#7d76e5', brightMagenta: '#ecb465', brightCyan: '#bff06a', brightWhite: '#e6e7ea'
    },
    semantic: { ok: '#66d693', warn: '#ecbf65', error: '#ec8869', tool: '#7d76e5' },
    glass: { backgroundGlow: '#11169c', tint: '#131e44', rim: '#2822d3', blurPx: 22, saturation: 1.39, surfaceOpacity: 0.63, strongOpacity: 0.72, rimOpacity: 0.47, glowOpacity: 0.31 }
  },
  {
    name: 'lg-emerald-murk', label: "Emerald Murk", description: "green smoke", mode: 'dark',
    colors: {
      background: '#08150f', foreground: '#eff3f1', card: '#143e2e', cardForeground: '#eff3f1',
      muted: '#113326', mutedForeground: '#a8c4b8', popover: '#143e2e', popoverForeground: '#eff3f1',
      primary: '#ee75e4', primaryForeground: '#000000', secondary: '#138160', secondaryForeground: '#ffffff',
      accent: '#9d82ed', accentForeground: '#000000', border: '#2fddc6', input: '#143e2e', ring: '#f2897f',
      midground: '#f2897f', midgroundForeground: '#000000', composerRing: '#f2897f',
      destructive: '#efa07e', destructiveForeground: '#000000', sidebarBackground: '#143e2e', sidebarBorder: '#2fddc6',
      userBubble: '#138160', userBubbleBorder: '#f2897f'
    },
    darkColors: null,
    terminal: {
      foreground: '#eff3f1', cursor: '#f2897f', selectionBackground: '#138160', black: '#08150f',
      red: '#efa07e', green: '#73e2ad', yellow: '#eed075', blue: '#9d82ed', magenta: '#ee75e4', cyan: '#f2897f', white: '#eff3f1',
      brightBlack: '#a8c4b8', brightRed: '#efa07e', brightGreen: '#73e2ad', brightYellow: '#eed075',
      brightBlue: '#9d82ed', brightMagenta: '#ee75e4', brightCyan: '#f2897f', brightWhite: '#eff3f1'
    },
    semantic: { ok: '#73e2ad', warn: '#eed075', error: '#efa07e', tool: '#9d82ed' },
    glass: { backgroundGlow: '#17a88b', tint: '#184b38', rim: '#2fddc6', blurPx: 24, saturation: 1.45, surfaceOpacity: 0.36, strongOpacity: 0.76, rimOpacity: 0.2, glowOpacity: 0.35 }
  },
  {
    name: 'lg-topaz-smoke', label: "Topaz Smoke", description: "golden smoke", mode: 'dark',
    colors: {
      background: '#19130a', foreground: '#eceae4', card: '#453819', cardForeground: '#eceae4',
      muted: '#382d14', mutedForeground: '#c9c4ba', popover: '#453819', popoverForeground: '#eceae4',
      primary: '#84c3f0', primaryForeground: '#000000', secondary: '#876f1a', secondaryForeground: '#ffffff',
      accent: '#6ae3f0', accentForeground: '#000000', border: '#e0d842', input: '#453819', ring: '#bf6af0',
      midground: '#bf6af0', midgroundForeground: '#000000', composerRing: '#bf6af0',
      destructive: '#ec697b', destructiveForeground: '#000000', sidebarBackground: '#453819', sidebarBorder: '#e0d842',
      userBubble: '#876f1a', userBubbleBorder: '#bf6af0'
    },
    darkColors: null,
    terminal: {
      foreground: '#eceae4', cursor: '#bf6af0', selectionBackground: '#876f1a', black: '#19130a',
      red: '#ec697b', green: '#56e6b1', yellow: '#f0de84', blue: '#6ae3f0', magenta: '#84c3f0', cyan: '#bf6af0', white: '#eceae4',
      brightBlack: '#c9c4ba', brightRed: '#ec697b', brightGreen: '#56e6b1', brightYellow: '#f0de84',
      brightBlue: '#6ae3f0', brightMagenta: '#84c3f0', brightCyan: '#bf6af0', brightWhite: '#eceae4'
    },
    semantic: { ok: '#56e6b1', warn: '#f0de84', error: '#ec697b', tool: '#6ae3f0' },
    glass: { backgroundGlow: '#756a15', tint: '#51421d', rim: '#e0d842', blurPx: 26, saturation: 1.06, surfaceOpacity: 0.4, strongOpacity: 0.79, rimOpacity: 0.24, glowOpacity: 0.1 }
  },
  {
    name: 'lg-abyss-pearl', label: "Abyss Pearl", description: "deep lustrous", mode: 'dark',
    colors: {
      background: '#0c181d', foreground: '#f0f1f2', card: '#1c394f', cardForeground: '#f0f1f2',
      muted: '#172e3f', mutedForeground: '#9faeb7', popover: '#1c394f', popoverForeground: '#f0f1f2',
      primary: '#65ecd1', primaryForeground: '#000000', secondary: '#1c5392', secondaryForeground: '#ffffff',
      accent: '#87cde8', accentForeground: '#000000', border: '#2257d3', input: '#1c394f', ring: '#7faff2',
      midground: '#7faff2', midgroundForeground: '#000000', composerRing: '#7faff2',
      destructive: '#ef7e85', destructiveForeground: '#000000', sidebarBackground: '#1c394f', sidebarBorder: '#2257d3',
      userBubble: '#1c5392', userBubbleBorder: '#7faff2'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0f1f2', cursor: '#7faff2', selectionBackground: '#1c5392', black: '#0c181d',
      red: '#ef7e85', green: '#7adcc3', yellow: '#ece165', blue: '#87cde8', magenta: '#65ecd1', cyan: '#7faff2', white: '#f0f1f2',
      brightBlack: '#9faeb7', brightRed: '#ef7e85', brightGreen: '#7adcc3', brightYellow: '#ece165',
      brightBlue: '#87cde8', brightMagenta: '#65ecd1', brightCyan: '#7faff2', brightWhite: '#f0f1f2'
    },
    semantic: { ok: '#7adcc3', warn: '#ece165', error: '#ef7e85', tool: '#87cde8' },
    glass: { backgroundGlow: '#173f84', tint: '#20405a', rim: '#2257d3', blurPx: 28, saturation: 1.11, surfaceOpacity: 0.45, strongOpacity: 0.82, rimOpacity: 0.29, glowOpacity: 0.14 }
  },
  {
    name: 'lg-tidal-opal', label: "Tidal Opal", description: "milky tidal", mode: 'light',
    colors: {
      background: '#edf2f3', foreground: '#1c2d33', card: '#d0e0e4', cardForeground: '#1c2d33',
      muted: '#dae6e9', mutedForeground: '#3b6e78', popover: '#d0e0e4', popoverForeground: '#1c2d33',
      primary: '#9b1590', primaryForeground: '#ffffff', secondary: '#a0d0e4', secondaryForeground: '#000000',
      accent: '#194397', accentForeground: '#ffffff', border: '#2d79c0', input: '#d0e0e4', ring: '#971317',
      midground: '#971317', midgroundForeground: '#ffffff', composerRing: '#971317',
      destructive: '#9e1a1a', destructiveForeground: '#ffffff', sidebarBackground: '#d0e0e4', sidebarBorder: '#2d79c0',
      userBubble: '#a0d0e4', userBubbleBorder: '#971317'
    },
    darkColors: null,
    terminal: {
      foreground: '#1c2d33', cursor: '#971317', selectionBackground: '#a0d0e4', black: '#edf2f3',
      red: '#9e1a1a', green: '#1e8d52', yellow: '#9d8613', blue: '#194397', magenta: '#9b1590', cyan: '#971317', white: '#1c2d33',
      brightBlack: '#3b6e78', brightRed: '#9e1a1a', brightGreen: '#1e8d52', brightYellow: '#9d8613',
      brightBlue: '#194397', brightMagenta: '#9b1590', brightCyan: '#971317', brightWhite: '#1c2d33'
    },
    semantic: { ok: '#1e8d52', warn: '#9d8613', error: '#9e1a1a', tool: '#194397' },
    glass: { backgroundGlow: '#a1cae8', tint: '#cbdde1', rim: '#2d79c0', blurPx: 30, saturation: 1.17, surfaceOpacity: 0.49, strongOpacity: 0.86, rimOpacity: 0.34, glowOpacity: 0.17 }
  },
  {
    name: 'lg-basalt-current', label: "Basalt Current", description: "stone current", mode: 'dark',
    colors: {
      background: '#151b21', foreground: '#eff0f3', card: '#1f2835', cardForeground: '#eff0f3',
      muted: '#1b232d', mutedForeground: '#b6c1ce', popover: '#1f2835', popoverForeground: '#eff0f3',
      primary: '#f0b184', primaryForeground: '#000000', secondary: '#273860', secondaryForeground: '#ffffff',
      accent: '#7da6f2', accentForeground: '#000000', border: '#5b69c8', input: '#1f2835', ring: '#aaf27f',
      midground: '#aaf27f', midgroundForeground: '#000000', composerRing: '#aaf27f',
      destructive: '#ef857e', destructiveForeground: '#000000', sidebarBackground: '#1f2835', sidebarBorder: '#5b69c8',
      userBubble: '#273860', userBubbleBorder: '#aaf27f'
    },
    darkColors: null,
    terminal: {
      foreground: '#eff0f3', cursor: '#aaf27f', selectionBackground: '#273860', black: '#151b21',
      red: '#ef857e', green: '#6de99c', yellow: '#e7f084', blue: '#7da6f2', magenta: '#f0b184', cyan: '#aaf27f', white: '#eff0f3',
      brightBlack: '#b6c1ce', brightRed: '#ef857e', brightGreen: '#6de99c', brightYellow: '#e7f084',
      brightBlue: '#7da6f2', brightMagenta: '#f0b184', brightCyan: '#aaf27f', brightWhite: '#eff0f3'
    },
    semantic: { ok: '#6de99c', warn: '#e7f084', error: '#ef857e', tool: '#7da6f2' },
    glass: { backgroundGlow: '#36468a', tint: '#202937', rim: '#5b69c8', blurPx: 10, saturation: 1.23, surfaceOpacity: 0.54, strongOpacity: 0.9, rimOpacity: 0.38, glowOpacity: 0.21 }
  },
  {
    name: 'lg-malachite-rain', label: "Malachite Rain", description: "mineral rain", mode: 'light',
    colors: {
      background: '#f3f8f6', foreground: '#152321', card: '#e0efeb', cardForeground: '#152321',
      muted: '#e5f1ee', mutedForeground: '#376256', popover: '#e0efeb', popoverForeground: '#152321',
      primary: '#143390', primaryForeground: '#ffffff', secondary: '#b1ede6', secondaryForeground: '#000000',
      accent: '#1b178c', accentForeground: '#ffffff', border: '#26abb5', input: '#e0efeb', ring: '#5f118d',
      midground: '#5f118d', midgroundForeground: '#ffffff', composerRing: '#5f118d',
      destructive: '#9e2b1a', destructiveForeground: '#ffffff', sidebarBackground: '#e0efeb', sidebarBorder: '#26abb5',
      userBubble: '#b1ede6', userBubbleBorder: '#5f118d'
    },
    darkColors: null,
    terminal: {
      foreground: '#152321', cursor: '#5f118d', selectionBackground: '#b1ede6', black: '#f3f8f6',
      red: '#9e2b1a', green: '#217d61', yellow: '#915212', blue: '#1b178c', magenta: '#143390', cyan: '#5f118d', white: '#152321',
      brightBlack: '#376256', brightRed: '#9e2b1a', brightGreen: '#217d61', brightYellow: '#915212',
      brightBlue: '#1b178c', brightMagenta: '#143390', brightCyan: '#5f118d', brightWhite: '#152321'
    },
    semantic: { ok: '#217d61', warn: '#915212', error: '#9e2b1a', tool: '#1b178c' },
    glass: { backgroundGlow: '#80e5e5', tint: '#d9ebe7', rim: '#26abb5', blurPx: 12, saturation: 1.28, surfaceOpacity: 0.58, strongOpacity: 0.72, rimOpacity: 0.42, glowOpacity: 0.24 }
  },
  {
    name: 'lg-copper-halo', label: "Copper Halo", description: "burnished halo", mode: 'dark',
    colors: {
      background: '#151308', foreground: '#f3f3ef', card: '#464215', cardForeground: '#f3f3ef',
      muted: '#383511', mutedForeground: '#c1beac', popover: '#464215', popoverForeground: '#f3f3ef',
      primary: '#9575ee', primaryForeground: '#000000', secondary: '#8b8d13', secondaryForeground: '#000000',
      accent: '#8482ed', accentForeground: '#000000', border: '#bddd2f', input: '#464215', ring: '#f27fd4',
      midground: '#f27fd4', midgroundForeground: '#000000', composerRing: '#f27fd4',
      destructive: '#ef947e', destructiveForeground: '#000000', sidebarBackground: '#464215', sidebarBorder: '#bddd2f',
      userBubble: '#8b8d13', userBubbleBorder: '#f27fd4'
    },
    darkColors: null,
    terminal: {
      foreground: '#f3f3ef', cursor: '#f27fd4', selectionBackground: '#8b8d13', black: '#151308',
      red: '#ef947e', green: '#73e2b8', yellow: '#eed475', blue: '#8482ed', magenta: '#9575ee', cyan: '#f27fd4', white: '#f3f3ef',
      brightBlack: '#c1beac', brightRed: '#ef947e', brightGreen: '#73e2b8', brightYellow: '#eed475',
      brightBlue: '#8482ed', brightMagenta: '#9575ee', brightCyan: '#f27fd4', brightWhite: '#f3f3ef'
    },
    semantic: { ok: '#73e2b8', warn: '#eed475', error: '#ef947e', tool: '#8482ed' },
    glass: { backgroundGlow: '#7c8a11', tint: '#555119', rim: '#bddd2f', blurPx: 14, saturation: 1.33, surfaceOpacity: 0.63, strongOpacity: 0.76, rimOpacity: 0.47, glowOpacity: 0.28 }
  },
  {
    name: 'lg-rose-gold-mist', label: "Rose Gold Mist", description: "polished mist", mode: 'light',
    colors: {
      background: '#fcfafa', foreground: '#351a1a', card: '#f5eded', cardForeground: '#351a1a',
      muted: '#f7f1f1', mutedForeground: '#7d363d', popover: '#f5eded', popoverForeground: '#351a1a',
      primary: '#1776a6', primaryForeground: '#ffffff', secondary: '#f1c8c6', secondaryForeground: '#000000',
      accent: '#1a8ea2', accentForeground: '#000000', border: '#d2532d', input: '#f5eded', ring: '#3214a1',
      midground: '#3214a1', midgroundForeground: '#ffffff', composerRing: '#3214a1',
      destructive: '#9e1a34', destructiveForeground: '#ffffff', sidebarBackground: '#f5eded', sidebarBorder: '#d2532d',
      userBubble: '#f1c8c6', userBubbleBorder: '#3214a1'
    },
    darkColors: null,
    terminal: {
      foreground: '#351a1a', cursor: '#3214a1', selectionBackground: '#f1c8c6', black: '#fcfafa',
      red: '#9e1a34', green: '#1a9e4f', yellow: '#a87715', blue: '#1a8ea2', magenta: '#1776a6', cyan: '#3214a1', white: '#351a1a',
      brightBlack: '#7d363d', brightRed: '#9e1a34', brightGreen: '#1a9e4f', brightYellow: '#a87715',
      brightBlue: '#1a8ea2', brightMagenta: '#1776a6', brightCyan: '#3214a1', brightWhite: '#351a1a'
    },
    semantic: { ok: '#1a9e4f', warn: '#a87715', error: '#9e1a34', tool: '#1a8ea2' },
    glass: { backgroundGlow: '#eaab9f', tint: '#f3e9e9', rim: '#d2532d', blurPx: 16, saturation: 1.39, surfaceOpacity: 0.36, strongOpacity: 0.79, rimOpacity: 0.2, glowOpacity: 0.31 }
  },
  {
    name: 'lg-molten-bronze', label: "Molten Bronze", description: "molten depth", mode: 'dark',
    colors: {
      background: '#1f1f0a', foreground: '#f2f2f0', card: '#33380f', cardForeground: '#f2f2f0',
      muted: '#2c300d', mutedForeground: '#b9bb9a', popover: '#33380f', popoverForeground: '#f2f2f0',
      primary: '#ec6584', primaryForeground: '#000000', secondary: '#586d0d', secondaryForeground: '#ffffff',
      accent: '#87e3e8', accentForeground: '#000000', border: '#8fd322', input: '#33380f', ring: '#f2bf7f',
      midground: '#f2bf7f', midgroundForeground: '#000000', composerRing: '#f2bf7f',
      destructive: '#ef7e91', destructiveForeground: '#000000', sidebarBackground: '#33380f', sidebarBorder: '#8fd322',
      userBubble: '#586d0d', userBubbleBorder: '#f2bf7f'
    },
    darkColors: null,
    terminal: {
      foreground: '#f2f2f0', cursor: '#f2bf7f', selectionBackground: '#586d0d', black: '#1f1f0a',
      red: '#ef7e91', green: '#7adccd', yellow: '#ece565', blue: '#87e3e8', magenta: '#ec6584', cyan: '#f2bf7f', white: '#f2f2f0',
      brightBlack: '#b9bb9a', brightRed: '#ef7e91', brightGreen: '#7adccd', brightYellow: '#ece565',
      brightBlue: '#87e3e8', brightMagenta: '#ec6584', brightCyan: '#f2bf7f', brightWhite: '#f2f2f0'
    },
    semantic: { ok: '#7adccd', warn: '#ece565', error: '#ef7e91', tool: '#87e3e8' },
    glass: { backgroundGlow: '#7db00f', tint: '#373d10', rim: '#8fd322', blurPx: 18, saturation: 1.45, surfaceOpacity: 0.4, strongOpacity: 0.82, rimOpacity: 0.24, glowOpacity: 0.35 }
  },
  {
    name: 'lg-platinum-ember', label: "Platinum Ember", description: "cool metal warm core", mode: 'light',
    colors: {
      background: '#f3f3f2', foreground: '#1e2414', card: '#e0e1dd', cardForeground: '#1e2414',
      muted: '#e7e7e5', mutedForeground: '#576732', popover: '#e0e1dd', popoverForeground: '#1e2414',
      primary: '#689b15', primaryForeground: '#000000', secondary: '#c9d5bb', secondaryForeground: '#000000',
      accent: '#195697', accentForeground: '#ffffff', border: '#6d9a53', input: '#e0e1dd', ring: '#139736',
      midground: '#139736', midgroundForeground: '#000000', composerRing: '#139736',
      destructive: '#9e1a23', destructiveForeground: '#ffffff', sidebarBackground: '#e0e1dd', sidebarBorder: '#6d9a53',
      userBubble: '#c9d5bb', userBubbleBorder: '#139736'
    },
    darkColors: null,
    terminal: {
      foreground: '#1e2414', cursor: '#139736', selectionBackground: '#c9d5bb', black: '#f3f3f2',
      red: '#9e1a23', green: '#1e8d64', yellow: '#9c8511', blue: '#195697', magenta: '#689b15', cyan: '#139736', white: '#1e2414',
      brightBlack: '#576732', brightRed: '#9e1a23', brightGreen: '#1e8d64', brightYellow: '#9c8511',
      brightBlue: '#195697', brightMagenta: '#689b15', brightCyan: '#139736', brightWhite: '#1e2414'
    },
    semantic: { ok: '#1e8d64', warn: '#9c8511', error: '#9e1a23', tool: '#195697' },
    glass: { backgroundGlow: '#b0c89d', tint: '#dddeda', rim: '#6d9a53', blurPx: 20, saturation: 1.06, surfaceOpacity: 0.45, strongOpacity: 0.86, rimOpacity: 0.29, glowOpacity: 0.1 }
  },
  {
    name: 'lg-moss-cathedral', label: "Moss Cathedral", description: "mossy arched", mode: 'dark',
    colors: {
      background: '#162510', foreground: '#eff3ef', card: '#20441b', cardForeground: '#eff3ef',
      muted: '#1c3817', mutedForeground: '#bccbb9', popover: '#20441b', popoverForeground: '#eff3ef',
      primary: '#f0d584', primaryForeground: '#000000', secondary: '#1f791b', secondaryForeground: '#ffffff',
      accent: '#7dc1f2', accentForeground: '#000000', border: '#42e055', input: '#20441b', ring: '#83f27f',
      midground: '#83f27f', midgroundForeground: '#000000', composerRing: '#83f27f',
      destructive: '#ef7e81', destructiveForeground: '#000000', sidebarBackground: '#20441b', sidebarBorder: '#42e055',
      userBubble: '#1f791b', userBubbleBorder: '#83f27f'
    },
    darkColors: null,
    terminal: {
      foreground: '#eff3ef', cursor: '#83f27f', selectionBackground: '#1f791b', black: '#162510',
      red: '#ef7e81', green: '#6de9a9', yellow: '#f0ca84', blue: '#7dc1f2', magenta: '#f0d584', cyan: '#83f27f', white: '#eff3ef',
      brightBlack: '#bccbb9', brightRed: '#ef7e81', brightGreen: '#6de9a9', brightYellow: '#f0ca84',
      brightBlue: '#7dc1f2', brightMagenta: '#f0d584', brightCyan: '#83f27f', brightWhite: '#eff3ef'
    },
    semantic: { ok: '#6de9a9', warn: '#f0ca84', error: '#ef7e81', tool: '#7dc1f2' },
    glass: { backgroundGlow: '#1a8120', tint: '#21471c', rim: '#42e055', blurPx: 22, saturation: 1.11, surfaceOpacity: 0.49, strongOpacity: 0.9, rimOpacity: 0.34, glowOpacity: 0.14 }
  },
  {
    name: 'lg-orchid-sap', label: "Orchid Sap", description: "floral resin", mode: 'dark',
    colors: {
      background: '#110611', foreground: '#eae6ea', card: '#41163b', cardForeground: '#eae6ea',
      muted: '#351231', mutedForeground: '#b99db8', popover: '#41163b', popoverForeground: '#eae6ea',
      primary: '#65ec9d', primaryForeground: '#000000', secondary: '#891773', secondaryForeground: '#ffffff',
      accent: '#76a2e5', accentForeground: '#000000', border: '#d32292', input: '#41163b', ring: '#6ad6f0',
      midground: '#6ad6f0', midgroundForeground: '#000000', composerRing: '#6ad6f0',
      destructive: '#ec6e69', destructiveForeground: '#000000', sidebarBackground: '#41163b', sidebarBorder: '#d32292',
      userBubble: '#891773', userBubbleBorder: '#6ad6f0'
    },
    darkColors: null,
    terminal: {
      foreground: '#eae6ea', cursor: '#6ad6f0', selectionBackground: '#891773', black: '#110611',
      red: '#ec6e69', green: '#66d6a9', yellow: '#ecc865', blue: '#76a2e5', magenta: '#65ec9d', cyan: '#6ad6f0', white: '#eae6ea',
      brightBlack: '#b99db8', brightRed: '#ec6e69', brightGreen: '#66d6a9', brightYellow: '#ecc865',
      brightBlue: '#76a2e5', brightMagenta: '#65ec9d', brightCyan: '#6ad6f0', brightWhite: '#eae6ea'
    },
    semantic: { ok: '#66d6a9', warn: '#ecc865', error: '#ec6e69', tool: '#76a2e5' },
    glass: { backgroundGlow: '#961770', tint: '#531c4c', rim: '#d32292', blurPx: 24, saturation: 1.17, surfaceOpacity: 0.54, strongOpacity: 0.72, rimOpacity: 0.38, glowOpacity: 0.17 }
  },
  {
    name: 'lg-sage-dew', label: "Sage Dew", description: "soft botanical", mode: 'light',
    colors: {
      background: '#fafcfa', foreground: '#203a22', card: '#eef4ee', cardForeground: '#203a22',
      muted: '#f1f6f1', mutedForeground: '#40803f', popover: '#eef4ee', popoverForeground: '#203a22',
      primary: '#9b1558', primaryForeground: '#ffffff', secondary: '#ccebd0', secondaryForeground: '#000000',
      accent: '#211997', accentForeground: '#ffffff', border: '#3bb261', input: '#eef4ee', ring: '#976b13',
      midground: '#976b13', midgroundForeground: '#ffffff', composerRing: '#976b13',
      destructive: '#ad301c', destructiveForeground: '#ffffff', sidebarBackground: '#eef4ee', sidebarBorder: '#3bb261',
      userBubble: '#ccebd0', userBubbleBorder: '#976b13'
    },
    darkColors: null,
    terminal: {
      foreground: '#203a22', cursor: '#976b13', selectionBackground: '#ccebd0', black: '#fafcfa',
      red: '#ad301c', green: '#1e8d50', yellow: '#9d6313', blue: '#211997', magenta: '#9b1558', cyan: '#976b13', white: '#203a22',
      brightBlack: '#40803f', brightRed: '#ad301c', brightGreen: '#1e8d50', brightYellow: '#9d6313',
      brightBlue: '#211997', brightMagenta: '#9b1558', brightCyan: '#976b13', brightWhite: '#203a22'
    },
    semantic: { ok: '#1e8d50', warn: '#9d6313', error: '#ad301c', tool: '#211997' },
    glass: { backgroundGlow: '#b5e5c1', tint: '#eaf1ea', rim: '#3bb261', blurPx: 26, saturation: 1.23, surfaceOpacity: 0.58, strongOpacity: 0.76, rimOpacity: 0.42, glowOpacity: 0.21 }
  },
  {
    name: 'lg-citrus-canopy', label: "Citrus Canopy", description: "sunlit leaf", mode: 'light',
    colors: {
      background: '#f1f4eb', foreground: '#1c2613', card: '#dde8cf', cardForeground: '#1c2613',
      muted: '#e3ecd7', mutedForeground: '#536b2e', popover: '#dde8cf', popoverForeground: '#1c2613',
      primary: '#187aa5', primaryForeground: '#ffffff', secondary: '#bee99b', secondaryForeground: '#000000',
      accent: '#3c1aa2', accentForeground: '#ffffff', border: '#59d22d', input: '#dde8cf', ring: '#3410a1',
      midground: '#3410a1', midgroundForeground: '#ffffff', composerRing: '#3410a1',
      destructive: '#9e341a', destructiveForeground: '#ffffff', sidebarBackground: '#dde8cf', sidebarBorder: '#59d22d',
      userBubble: '#bee99b', userBubbleBorder: '#3410a1'
    },
    darkColors: null,
    terminal: {
      foreground: '#1c2613', cursor: '#3410a1', selectionBackground: '#bee99b', black: '#f1f4eb',
      red: '#9e341a', green: '#1a9e65', yellow: '#a67618', blue: '#3c1aa2', magenta: '#187aa5', cyan: '#3410a1', white: '#1c2613',
      brightBlack: '#536b2e', brightRed: '#9e341a', brightGreen: '#1a9e65', brightYellow: '#a67618',
      brightBlue: '#3c1aa2', brightMagenta: '#187aa5', brightCyan: '#3410a1', brightWhite: '#1c2613'
    },
    semantic: { ok: '#1a9e65', warn: '#a67618', error: '#9e341a', tool: '#3c1aa2' },
    glass: { backgroundGlow: '#a0ea7b', tint: '#d8e5c7', rim: '#59d22d', blurPx: 28, saturation: 1.28, surfaceOpacity: 0.63, strongOpacity: 0.79, rimOpacity: 0.47, glowOpacity: 0.24 }
  },
  {
    name: 'lg-laser-lagoon', label: "Laser Lagoon", description: "laser clear", mode: 'dark',
    colors: {
      background: '#091e20', foreground: '#f0f2f2', card: '#0f3741', cardForeground: '#f0f2f2',
      muted: '#0d2f36', mutedForeground: '#9fb4b7', popover: '#0f3741', popoverForeground: '#f0f2f2',
      primary: '#ec65bf', primaryForeground: '#000000', secondary: '#0f5a78', secondaryForeground: '#ffffff',
      accent: '#9687e8', accentForeground: '#000000', border: '#2283d3', input: '#0f3741', ring: '#f28d7f',
      midground: '#f28d7f', midgroundForeground: '#000000', composerRing: '#f28d7f',
      destructive: '#ef987e', destructiveForeground: '#000000', sidebarBackground: '#0f3741', sidebarBorder: '#2283d3',
      userBubble: '#0f5a78', userBubbleBorder: '#f28d7f'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0f2f2', cursor: '#f28d7f', selectionBackground: '#0f5a78', black: '#091e20',
      red: '#ef987e', green: '#7adc9c', yellow: '#ecea65', blue: '#9687e8', magenta: '#ec65bf', cyan: '#f28d7f', white: '#f0f2f2',
      brightBlack: '#9fb4b7', brightRed: '#ef987e', brightGreen: '#7adc9c', brightYellow: '#ecea65',
      brightBlue: '#9687e8', brightMagenta: '#ec65bf', brightCyan: '#f28d7f', brightWhite: '#f0f2f2'
    },
    semantic: { ok: '#7adc9c', warn: '#ecea65', error: '#ef987e', tool: '#9687e8' },
    glass: { backgroundGlow: '#085e94', tint: '#103d48', rim: '#2283d3', blurPx: 30, saturation: 1.33, surfaceOpacity: 0.36, strongOpacity: 0.82, rimOpacity: 0.2, glowOpacity: 0.28 }
  },
  {
    name: 'lg-hot-circuit', label: "Hot Circuit", description: "charged smoke", mode: 'dark',
    colors: {
      background: '#250a18', foreground: '#ebe5e7', card: '#4c1027', cardForeground: '#ebe5e7',
      muted: '#3e0e22', mutedForeground: '#c3aab5', popover: '#4c1027', popoverForeground: '#ebe5e7',
      primary: '#eeee75', primaryForeground: '#000000', secondary: '#841033', secondaryForeground: '#ffffff',
      accent: '#70ebeb', accentForeground: '#000000', border: '#dd2f46', input: '#4c1027', ring: '#6af06a',
      midground: '#6af06a', midgroundForeground: '#000000', composerRing: '#6af06a',
      destructive: '#ec9169', destructiveForeground: '#000000', sidebarBackground: '#4c1027', sidebarBorder: '#dd2f46',
      userBubble: '#841033', userBubbleBorder: '#6af06a'
    },
    darkColors: null,
    terminal: {
      foreground: '#ebe5e7', cursor: '#6af06a', selectionBackground: '#841033', black: '#250a18',
      red: '#ec9169', green: '#5ede9a', yellow: '#e6ee75', blue: '#70ebeb', magenta: '#eeee75', cyan: '#6af06a', white: '#ebe5e7',
      brightBlack: '#c3aab5', brightRed: '#ec9169', brightGreen: '#5ede9a', brightYellow: '#e6ee75',
      brightBlue: '#70ebeb', brightMagenta: '#eeee75', brightCyan: '#6af06a', brightWhite: '#ebe5e7'
    },
    semantic: { ok: '#5ede9a', warn: '#e6ee75', error: '#ec9169', tool: '#70ebeb' },
    glass: { backgroundGlow: '#a50928', tint: '#52112a', rim: '#dd2f46', blurPx: 10, saturation: 1.39, surfaceOpacity: 0.4, strongOpacity: 0.86, rimOpacity: 0.24, glowOpacity: 0.31 }
  },
  {
    name: 'lg-ion-blue', label: "Ion Blue", description: "ionized cool", mode: 'dark',
    colors: {
      background: '#0c0e2a', foreground: '#efeff3', card: '#161355', cardForeground: '#efeff3',
      muted: '#121144', mutedForeground: '#b6b7ce', popover: '#161355', popoverForeground: '#efeff3',
      primary: '#84f0c3', primaryForeground: '#000000', secondary: '#20128f', secondaryForeground: '#ffffff',
      accent: '#7dddf2', accentForeground: '#000000', border: '#6f42e0', input: '#161355', ring: '#7f96f2',
      midground: '#7f96f2', midgroundForeground: '#000000', composerRing: '#7f96f2',
      destructive: '#ef7e8d', destructiveForeground: '#000000', sidebarBackground: '#161355', sidebarBorder: '#6f42e0',
      userBubble: '#20128f', userBubbleBorder: '#7f96f2'
    },
    darkColors: null,
    terminal: {
      foreground: '#efeff3', cursor: '#7f96f2', selectionBackground: '#20128f', black: '#0c0e2a',
      red: '#ef7e8d', green: '#6de9b5', yellow: '#f0ce84', blue: '#7dddf2', magenta: '#84f0c3', cyan: '#7f96f2', white: '#efeff3',
      brightBlack: '#b6b7ce', brightRed: '#ef7e8d', brightGreen: '#6de9b5', brightYellow: '#f0ce84',
      brightBlue: '#7dddf2', brightMagenta: '#84f0c3', brightCyan: '#7f96f2', brightWhite: '#efeff3'
    },
    semantic: { ok: '#6de9b5', warn: '#f0ce84', error: '#ef7e8d', tool: '#7dddf2' },
    glass: { backgroundGlow: '#2f0bb5', tint: '#17145a', rim: '#6f42e0', blurPx: 12, saturation: 1.45, surfaceOpacity: 0.45, strongOpacity: 0.9, rimOpacity: 0.29, glowOpacity: 0.35 }
  },
  {
    name: 'lg-acid-sunset', label: "Acid Sunset", description: "acid horizon", mode: 'dark',
    colors: {
      background: '#0f0512', foreground: '#e7e6ea', card: '#46104e', cardForeground: '#e7e6ea',
      muted: '#390d40', mutedForeground: '#b1a1b5', popover: '#46104e', popoverForeground: '#e7e6ea',
      primary: '#ec9d65', primaryForeground: '#000000', secondary: '#94139a', secondaryForeground: '#ffffff',
      accent: '#76bce5', accentForeground: '#000000', border: '#d322be', input: '#46104e', ring: '#d6f06a',
      midground: '#d6f06a', midgroundForeground: '#000000', composerRing: '#d6f06a',
      destructive: '#ec6972', destructiveForeground: '#000000', sidebarBackground: '#46104e', sidebarBorder: '#d322be',
      userBubble: '#94139a', userBubbleBorder: '#d6f06a'
    },
    darkColors: null,
    terminal: {
      foreground: '#e7e6ea', cursor: '#d6f06a', selectionBackground: '#94139a', black: '#0f0512',
      red: '#ec6972', green: '#66d6b5', yellow: '#eccc65', blue: '#76bce5', magenta: '#ec9d65', cyan: '#d6f06a', white: '#e7e6ea',
      brightBlack: '#b1a1b5', brightRed: '#ec6972', brightGreen: '#66d6b5', brightYellow: '#eccc65',
      brightBlue: '#76bce5', brightMagenta: '#ec9d65', brightCyan: '#d6f06a', brightWhite: '#e7e6ea'
    },
    semantic: { ok: '#66d6b5', warn: '#eccc65', error: '#ec6972', tool: '#76bce5' },
    glass: { backgroundGlow: '#83077d', tint: '#5b1465', rim: '#d322be', blurPx: 14, saturation: 1.06, surfaceOpacity: 0.49, strongOpacity: 0.72, rimOpacity: 0.34, glowOpacity: 0.1 }
  },
  {
    name: 'lg-pearl-prism', label: "Pearl Prism", description: "prismatic pearl", mode: 'light',
    colors: {
      background: '#eef0f1', foreground: '#181e2b', card: '#d8dbe0', cardForeground: '#181e2b',
      muted: '#dee1e5', mutedForeground: '#374f6f', popover: '#d8dbe0', popoverForeground: '#181e2b',
      primary: '#9b1542', primaryForeground: '#ffffff', secondary: '#aeb9d5', secondaryForeground: '#000000',
      accent: '#192397', accentForeground: '#ffffff', border: '#4a53a4', input: '#d8dbe0', ring: '#978113',
      midground: '#978113', midgroundForeground: '#000000', composerRing: '#978113',
      destructive: '#ad261c', destructiveForeground: '#ffffff', sidebarBackground: '#d8dbe0', sidebarBorder: '#4a53a4',
      userBubble: '#aeb9d5', userBubbleBorder: '#978113'
    },
    darkColors: null,
    terminal: {
      foreground: '#181e2b', cursor: '#978113', selectionBackground: '#aeb9d5', black: '#eef0f1',
      red: '#ad261c', green: '#1e8d62', yellow: '#9c6417', blue: '#192397', magenta: '#9b1542', cyan: '#978113', white: '#181e2b',
      brightBlack: '#374f6f', brightRed: '#ad261c', brightGreen: '#1e8d62', brightYellow: '#9c6417',
      brightBlue: '#192397', brightMagenta: '#9b1542', brightCyan: '#978113', brightWhite: '#181e2b'
    },
    semantic: { ok: '#1e8d62', warn: '#9c6417', error: '#ad261c', tool: '#192397' },
    glass: { backgroundGlow: '#a3abd4', tint: '#d1d5db', rim: '#4a53a4', blurPx: 16, saturation: 1.11, surfaceOpacity: 0.54, strongOpacity: 0.76, rimOpacity: 0.38, glowOpacity: 0.14 }
  },
  {
    name: 'lg-rose-quartz-veil', label: "Rose Quartz Veil", description: "blush crystal", mode: 'light',
    colors: {
      background: '#f5f2f0', foreground: '#35271a', card: '#e8e0da', cardForeground: '#35271a',
      muted: '#ece5e1', mutedForeground: '#7d5136', popover: '#e8e0da', popoverForeground: '#35271a',
      primary: '#1744a6', primaryForeground: '#ffffff', secondary: '#e2caae', secondaryForeground: '#000000',
      accent: '#281aa2', accentForeground: '#ffffff', border: '#c49d3b', input: '#e8e0da', ring: '#6414a1',
      midground: '#6414a1', midgroundForeground: '#ffffff', composerRing: '#6414a1',
      destructive: '#a02f1b', destructiveForeground: '#ffffff', sidebarBackground: '#e8e0da', sidebarBorder: '#c49d3b',
      userBubble: '#e2caae', userBubbleBorder: '#6414a1'
    },
    darkColors: null,
    terminal: {
      foreground: '#35271a', cursor: '#6414a1', selectionBackground: '#e2caae', black: '#f5f2f0',
      red: '#a02f1b', green: '#1a9e7b', yellow: '#a97a15', blue: '#281aa2', magenta: '#1744a6', cyan: '#6414a1', white: '#35271a',
      brightBlack: '#7d5136', brightRed: '#a02f1b', brightGreen: '#1a9e7b', brightYellow: '#a97a15',
      brightBlue: '#281aa2', brightMagenta: '#1744a6', brightCyan: '#6414a1', brightWhite: '#35271a'
    },
    semantic: { ok: '#1a9e7b', warn: '#a97a15', error: '#a02f1b', tool: '#281aa2' },
    glass: { backgroundGlow: '#e3cda6', tint: '#e4dbd4', rim: '#c49d3b', blurPx: 18, saturation: 1.17, surfaceOpacity: 0.58, strongOpacity: 0.79, rimOpacity: 0.42, glowOpacity: 0.17 }
  },
  {
    name: 'lg-mint-crystal', label: "Mint Crystal", description: "minted clear", mode: 'light',
    colors: {
      background: '#f4f7f5', foreground: '#223830', card: '#e0ece6', cardForeground: '#223830',
      muted: '#e6efeb', mutedForeground: '#457a63', popover: '#e0ece6', popoverForeground: '#223830',
      primary: '#521490', primaryForeground: '#ffffff', secondary: '#b6e7d9', secondaryForeground: '#000000',
      accent: '#38178c', accentForeground: '#ffffff', border: '#30ab9f', input: '#e0ece6', ring: '#8d113a',
      midground: '#8d113a', midgroundForeground: '#ffffff', composerRing: '#8d113a',
      destructive: '#ad391c', destructiveForeground: '#ffffff', sidebarBackground: '#e0ece6', sidebarBorder: '#30ab9f',
      userBubble: '#b6e7d9', userBubbleBorder: '#8d113a'
    },
    darkColors: null,
    terminal: {
      foreground: '#223830', cursor: '#8d113a', selectionBackground: '#b6e7d9', black: '#f4f7f5',
      red: '#ad391c', green: '#217d6f', yellow: '#917112', blue: '#38178c', magenta: '#521490', cyan: '#8d113a', white: '#223830',
      brightBlack: '#457a63', brightRed: '#ad391c', brightGreen: '#217d6f', brightYellow: '#917112',
      brightBlue: '#38178c', brightMagenta: '#521490', brightCyan: '#8d113a', brightWhite: '#223830'
    },
    semantic: { ok: '#217d6f', warn: '#917112', error: '#ad391c', tool: '#38178c' },
    glass: { backgroundGlow: '#b2e8df', tint: '#dbe9e3', rim: '#30ab9f', blurPx: 20, saturation: 1.23, surfaceOpacity: 0.63, strongOpacity: 0.82, rimOpacity: 0.47, glowOpacity: 0.21 }
  },
  {
    name: 'lg-lilac-ice', label: "Lilac Ice", description: "frosted lilac", mode: 'light',
    colors: {
      background: '#f8f7f9', foreground: '#201424', card: '#ece6ef', cardForeground: '#201424',
      muted: '#f0ecf2', mutedForeground: '#543267', popover: '#ece6ef', popoverForeground: '#201424',
      primary: '#9b7915', primaryForeground: '#000000', secondary: '#e1c2e8', secondaryForeground: '#000000',
      accent: '#197c97', accentForeground: '#ffffff', border: '#b239b4', input: '#ece6ef', ring: '#439713',
      midground: '#439713', midgroundForeground: '#000000', composerRing: '#439713',
      destructive: '#a01633', destructiveForeground: '#ffffff', sidebarBackground: '#ece6ef', sidebarBorder: '#b239b4',
      userBubble: '#e1c2e8', userBubbleBorder: '#439713'
    },
    darkColors: null,
    terminal: {
      foreground: '#201424', cursor: '#439713', selectionBackground: '#e1c2e8', black: '#f8f7f9',
      red: '#a01633', green: '#1e8d4e', yellow: '#9e8a11', blue: '#197c97', magenta: '#9b7915', cyan: '#439713', white: '#201424',
      brightBlack: '#543267', brightRed: '#a01633', brightGreen: '#1e8d4e', brightYellow: '#9e8a11',
      brightBlue: '#197c97', brightMagenta: '#9b7915', brightCyan: '#439713', brightWhite: '#201424'
    },
    semantic: { ok: '#1e8d4e', warn: '#9e8a11', error: '#a01633', tool: '#197c97' },
    glass: { backgroundGlow: '#d28cd9', tint: '#eae3ed', rim: '#b239b4', blurPx: 22, saturation: 1.28, surfaceOpacity: 0.36, strongOpacity: 0.86, rimOpacity: 0.2, glowOpacity: 0.24 }
  },
  {
    name: 'lg-citrine-lens', label: "Citrine Lens", description: "yellow crystal", mode: 'light',
    colors: {
      background: '#fcfcfa', foreground: '#2b2d16', card: '#f4f4ea', cardForeground: '#2b2d16',
      muted: '#f7f7f0', mutedForeground: '#747332', popover: '#f4f4ea', popoverForeground: '#2b2d16',
      primary: '#1752a6', primaryForeground: '#ffffff', secondary: '#ecf1c5', secondaryForeground: '#000000',
      accent: '#1a6ca2', accentForeground: '#ffffff', border: '#9ed22d', input: '#f4f4ea', ring: '#7d14a1',
      midground: '#7d14a1', midgroundForeground: '#ffffff', composerRing: '#7d14a1',
      destructive: '#ad1c30', destructiveForeground: '#ffffff', sidebarBackground: '#f4f4ea', sidebarBorder: '#9ed22d',
      userBubble: '#ecf1c5', userBubbleBorder: '#7d14a1'
    },
    darkColors: null,
    terminal: {
      foreground: '#2b2d16', cursor: '#7d14a1', selectionBackground: '#ecf1c5', black: '#fcfcfa',
      red: '#ad1c30', green: '#1a9e62', yellow: '#a89c15', blue: '#1a6ca2', magenta: '#1752a6', cyan: '#7d14a1', white: '#2b2d16',
      brightBlack: '#747332', brightRed: '#ad1c30', brightGreen: '#1a9e62', brightYellow: '#a89c15',
      brightBlue: '#1a6ca2', brightMagenta: '#1752a6', brightCyan: '#7d14a1', brightWhite: '#2b2d16'
    },
    semantic: { ok: '#1a9e62', warn: '#a89c15', error: '#ad1c30', tool: '#1a6ca2' },
    glass: { backgroundGlow: '#d2e88f', tint: '#f3f3e8', rim: '#9ed22d', blurPx: 24, saturation: 1.33, surfaceOpacity: 0.4, strongOpacity: 0.9, rimOpacity: 0.24, glowOpacity: 0.28 }
  },
  {
    name: 'lg-twilight-rain', label: "Twilight Rain", description: "wet dusk", mode: 'dark',
    colors: {
      background: '#080710', foreground: '#e8e3e9', card: '#16112d', cardForeground: '#e8e3e9',
      muted: '#130f26', mutedForeground: '#a09db9', popover: '#16112d', popoverForeground: '#e8e3e9',
      primary: '#ec8665', primaryForeground: '#000000', secondary: '#2c1565', secondaryForeground: '#ffffff',
      accent: '#76d6e5', accentForeground: '#000000', border: '#7222d3', input: '#16112d', ring: '#ecf06a',
      midground: '#ecf06a', midgroundForeground: '#000000', composerRing: '#ecf06a',
      destructive: '#ec697f', destructiveForeground: '#000000', sidebarBackground: '#16112d', sidebarBorder: '#7222d3',
      userBubble: '#2c1565', userBubbleBorder: '#ecf06a'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8e3e9', cursor: '#ecf06a', selectionBackground: '#2c1565', black: '#080710',
      red: '#ec697f', green: '#66d6c0', yellow: '#ecd165', blue: '#76d6e5', magenta: '#ec8665', cyan: '#ecf06a', white: '#e8e3e9',
      brightBlack: '#a09db9', brightRed: '#ec697f', brightGreen: '#66d6c0', brightYellow: '#ecd165',
      brightBlue: '#76d6e5', brightMagenta: '#ec8665', brightCyan: '#ecf06a', brightWhite: '#e8e3e9'
    },
    semantic: { ok: '#66d6c0', warn: '#ecd165', error: '#ec697f', tool: '#76d6e5' },
    glass: { backgroundGlow: '#491d91', tint: '#1c1538', rim: '#7222d3', blurPx: 26, saturation: 1.39, surfaceOpacity: 0.45, strongOpacity: 0.72, rimOpacity: 0.29, glowOpacity: 0.31 }
  },
  {
    name: 'lg-desert-dusk', label: "Desert Dusk", description: "dusty glow", mode: 'dark',
    colors: {
      background: '#140c0a', foreground: '#f3f1ef', card: '#332117', cardForeground: '#f3f1ef',
      muted: '#2b1b13', mutedForeground: '#c4b1a8', popover: '#332117', popoverForeground: '#f3f1ef',
      primary: '#75bbee', primaryForeground: '#000000', secondary: '#6b401c', secondaryForeground: '#ffffff',
      accent: '#82cbed', accentForeground: '#000000', border: '#d69936', input: '#332117', ring: '#af7ff2',
      midground: '#af7ff2', midgroundForeground: '#000000', composerRing: '#af7ff2',
      destructive: '#ef7e89', destructiveForeground: '#000000', sidebarBackground: '#332117', sidebarBorder: '#d69936',
      userBubble: '#6b401c', userBubbleBorder: '#af7ff2'
    },
    darkColors: null,
    terminal: {
      foreground: '#f3f1ef', cursor: '#af7ff2', selectionBackground: '#6b401c', black: '#140c0a',
      red: '#ef7e89', green: '#73e296', yellow: '#eee075', blue: '#82cbed', magenta: '#75bbee', cyan: '#af7ff2', white: '#f3f1ef',
      brightBlack: '#c4b1a8', brightRed: '#ef7e89', brightGreen: '#73e296', brightYellow: '#eee075',
      brightBlue: '#82cbed', brightMagenta: '#75bbee', brightCyan: '#af7ff2', brightWhite: '#f3f1ef'
    },
    semantic: { ok: '#73e296', warn: '#eee075', error: '#ef7e89', tool: '#82cbed' },
    glass: { backgroundGlow: '#996526', tint: '#3d271b', rim: '#d69936', blurPx: 28, saturation: 1.45, surfaceOpacity: 0.49, strongOpacity: 0.76, rimOpacity: 0.34, glowOpacity: 0.35 }
  },
  {
    name: 'lg-storm-lavender', label: "Storm Lavender", description: "storm frost", mode: 'dark',
    colors: {
      background: '#110c17', foreground: '#e8e4ec', card: '#2c1c3a', cardForeground: '#e8e4ec',
      muted: '#24172f', mutedForeground: '#c1bac9', popover: '#2c1c3a', popoverForeground: '#e8e4ec',
      primary: '#b1f084', primaryForeground: '#000000', secondary: '#532272', secondaryForeground: '#ffffff',
      accent: '#6aadf0', accentForeground: '#000000', border: '#b84dd5', input: '#2c1c3a', ring: '#6af0d6',
      midground: '#6af0d6', midgroundForeground: '#000000', composerRing: '#6af0d6',
      destructive: '#ec696e', destructiveForeground: '#000000', sidebarBackground: '#2c1c3a', sidebarBorder: '#b84dd5',
      userBubble: '#532272', userBubbleBorder: '#6af0d6'
    },
    darkColors: null,
    terminal: {
      foreground: '#e8e4ec', cursor: '#6af0d6', selectionBackground: '#532272', black: '#110c17',
      red: '#ec696e', green: '#56e695', yellow: '#f0ec84', blue: '#6aadf0', magenta: '#b1f084', cyan: '#6af0d6', white: '#e8e4ec',
      brightBlack: '#c1bac9', brightRed: '#ec696e', brightGreen: '#56e695', brightYellow: '#f0ec84',
      brightBlue: '#6aadf0', brightMagenta: '#b1f084', brightCyan: '#6af0d6', brightWhite: '#e8e4ec'
    },
    semantic: { ok: '#56e695', warn: '#f0ec84', error: '#ec696e', tool: '#6aadf0' },
    glass: { backgroundGlow: '#561e6b', tint: '#332043', rim: '#b84dd5', blurPx: 30, saturation: 1.06, surfaceOpacity: 0.54, strongOpacity: 0.79, rimOpacity: 0.38, glowOpacity: 0.1 }
  },
  {
    name: 'lg-aurora-ash', label: "Aurora Ash", description: "polar smoke", mode: 'dark',
    colors: {
      background: '#111218', foreground: '#f0f0f2', card: '#27273a', cardForeground: '#f0f0f2',
      muted: '#20202f', mutedForeground: '#9fa0b7', popover: '#27273a', popoverForeground: '#f0f0f2',
      primary: '#baec65', primaryForeground: '#000000', secondary: '#39346c', secondaryForeground: '#ffffff',
      accent: '#87a6e8', accentForeground: '#000000', border: '#6046af', input: '#27273a', ring: '#7ff291',
      midground: '#7ff291', midgroundForeground: '#000000', composerRing: '#7ff291',
      destructive: '#ef817e', destructiveForeground: '#000000', sidebarBackground: '#27273a', sidebarBorder: '#6046af',
      userBubble: '#39346c', userBubbleBorder: '#7ff291'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0f0f2', cursor: '#7ff291', selectionBackground: '#39346c', black: '#111218',
      red: '#ef817e', green: '#7adcb0', yellow: '#e5ec65', blue: '#87a6e8', magenta: '#baec65', cyan: '#7ff291', white: '#f0f0f2',
      brightBlack: '#9fa0b7', brightRed: '#ef817e', brightGreen: '#7adcb0', brightYellow: '#e5ec65',
      brightBlue: '#87a6e8', brightMagenta: '#baec65', brightCyan: '#7ff291', brightWhite: '#f0f0f2'
    },
    semantic: { ok: '#7adcb0', warn: '#e5ec65', error: '#ef817e', tool: '#87a6e8' },
    glass: { backgroundGlow: '#3c316b', tint: '#2c2c42', rim: '#6046af', blurPx: 10, saturation: 1.11, surfaceOpacity: 0.58, strongOpacity: 0.82, rimOpacity: 0.42, glowOpacity: 0.14 }
  },
  {
    name: 'lg-moonlit-clay', label: "Moonlit Clay", description: "earthen moon", mode: 'dark',
    colors: {
      background: '#1f1711', foreground: '#ebe8e5', card: '#4b3925', cardForeground: '#ebe8e5',
      muted: '#3b2c1e', mutedForeground: '#c3b6aa', popover: '#4b3925', popoverForeground: '#ebe8e5',
      primary: '#75eed0', primaryForeground: '#000000', secondary: '#84612a', secondaryForeground: '#ffffff',
      accent: '#7081eb', accentForeground: '#000000', border: '#cfaf3d', input: '#4b3925', ring: '#6a8cf0',
      midground: '#6a8cf0', midgroundForeground: '#000000', composerRing: '#6a8cf0',
      destructive: '#ec7669', destructiveForeground: '#000000', sidebarBackground: '#4b3925', sidebarBorder: '#cfaf3d',
      userBubble: '#84612a', userBubbleBorder: '#6a8cf0'
    },
    darkColors: null,
    terminal: {
      foreground: '#ebe8e5', cursor: '#6a8cf0', selectionBackground: '#84612a', black: '#1f1711',
      red: '#ec7669', green: '#5edeb3', yellow: '#eec575', blue: '#7081eb', magenta: '#75eed0', cyan: '#6a8cf0', white: '#ebe8e5',
      brightBlack: '#c3b6aa', brightRed: '#ec7669', brightGreen: '#5edeb3', brightYellow: '#eec575',
      brightBlue: '#7081eb', brightMagenta: '#75eed0', brightCyan: '#6a8cf0', brightWhite: '#ebe8e5'
    },
    semantic: { ok: '#5edeb3', warn: '#eec575', error: '#ec7669', tool: '#7081eb' },
    glass: { backgroundGlow: '#866b28', tint: '#523e28', rim: '#cfaf3d', blurPx: 12, saturation: 1.17, surfaceOpacity: 0.63, strongOpacity: 0.86, rimOpacity: 0.47, glowOpacity: 0.17 }
  },
  {
    name: 'lg-smoke-chrome', label: "Smoke Chrome", description: "brushed smoke", mode: 'dark',
    colors: {
      background: '#191b1c', foreground: '#f1eff3', card: '#232528', cardForeground: '#f1eff3',
      muted: '#1f2123', mutedForeground: '#b9c1cf', popover: '#232528', popoverForeground: '#f1eff3',
      primary: '#84baf0', primaryForeground: '#000000', secondary: '#323948', secondaryForeground: '#ffffff',
      accent: '#837df2', accentForeground: '#000000', border: '#757cae', input: '#232528', ring: '#d27ff2',
      midground: '#d27ff2', midgroundForeground: '#000000', composerRing: '#d27ff2',
      destructive: '#f18e7a', destructiveForeground: '#000000', sidebarBackground: '#232528', sidebarBorder: '#757cae',
      userBubble: '#323948', userBubbleBorder: '#d27ff2'
    },
    darkColors: null,
    terminal: {
      foreground: '#f1eff3', cursor: '#d27ff2', selectionBackground: '#323948', black: '#191b1c',
      red: '#f18e7a', green: '#6de9ce', yellow: '#f1d17f', blue: '#837df2', magenta: '#84baf0', cyan: '#d27ff2', white: '#f1eff3',
      brightBlack: '#b9c1cf', brightRed: '#f18e7a', brightGreen: '#6de9ce', brightYellow: '#f1d17f',
      brightBlue: '#837df2', brightMagenta: '#84baf0', brightCyan: '#d27ff2', brightWhite: '#f1eff3'
    },
    semantic: { ok: '#6de9ce', warn: '#f1d17f', error: '#f18e7a', tool: '#837df2' },
    glass: { backgroundGlow: '#4d5473', tint: '#242629', rim: '#757cae', blurPx: 14, saturation: 1.23, surfaceOpacity: 0.36, strongOpacity: 0.9, rimOpacity: 0.2, glowOpacity: 0.21 }
  },
  {
    name: 'lg-graphite-frost', label: "Graphite Frost", description: "cold graphite", mode: 'dark',
    colors: {
      background: '#0c0b0b', foreground: '#eae6e6', card: '#242221', cardForeground: '#eae6e6',
      muted: '#1e1d1c', mutedForeground: '#b5a2a1', popover: '#242221', popoverForeground: '#eae6e6',
      primary: '#ecca65', primaryForeground: '#000000', secondary: '#4d3e3a', secondaryForeground: '#ffffff',
      accent: '#9076e5', accentForeground: '#000000', border: '#95735f', input: '#242221', ring: '#a9f06a',
      midground: '#a9f06a', midgroundForeground: '#000000', composerRing: '#a9f06a',
      destructive: '#ea896e', destructiveForeground: '#000000', sidebarBackground: '#242221', sidebarBorder: '#95735f',
      userBubble: '#4d3e3a', userBubbleBorder: '#a9f06a'
    },
    darkColors: null,
    terminal: {
      foreground: '#eae6e6', cursor: '#a9f06a', selectionBackground: '#4d3e3a', black: '#0c0b0b',
      red: '#ea896e', green: '#66d688', yellow: '#ecd565', blue: '#9076e5', magenta: '#ecca65', cyan: '#a9f06a', white: '#eae6e6',
      brightBlack: '#b5a2a1', brightRed: '#ea896e', brightGreen: '#66d688', brightYellow: '#ecd565',
      brightBlue: '#9076e5', brightMagenta: '#ecca65', brightCyan: '#a9f06a', brightWhite: '#eae6e6'
    },
    semantic: { ok: '#66d688', warn: '#ecd565', error: '#ea896e', tool: '#9076e5' },
    glass: { backgroundGlow: '#50403a', tint: '#2d2b2a', rim: '#95735f', blurPx: 16, saturation: 1.28, surfaceOpacity: 0.4, strongOpacity: 0.72, rimOpacity: 0.24, glowOpacity: 0.24 }
  },
  {
    name: 'lg-porcelain-shadow', label: "Porcelain Shadow", description: "ceramic soft", mode: 'light',
    colors: {
      background: '#f5f6f5', foreground: '#182b27', card: '#e5e8e7', cardForeground: '#182b27',
      muted: '#e9eceb', mutedForeground: '#376f5c', popover: '#e5e8e7', popoverForeground: '#182b27',
      primary: '#159b4b', primaryForeground: '#000000', secondary: '#c4d9d5', secondaryForeground: '#000000',
      accent: '#194997', accentForeground: '#ffffff', border: '#559898', input: '#e5e8e7', ring: '#134c97',
      midground: '#134c97', midgroundForeground: '#ffffff', composerRing: '#134c97',
      destructive: '#ad1c26', destructiveForeground: '#ffffff', sidebarBackground: '#e5e8e7', sidebarBorder: '#559898',
      userBubble: '#c4d9d5', userBubbleBorder: '#134c97'
    },
    darkColors: null,
    terminal: {
      foreground: '#182b27', cursor: '#134c97', selectionBackground: '#c4d9d5', black: '#f5f6f5',
      red: '#ad1c26', green: '#1e8d4c', yellow: '#a05f18', blue: '#194997', magenta: '#159b4b', cyan: '#134c97', white: '#182b27',
      brightBlack: '#376f5c', brightRed: '#ad1c26', brightGreen: '#1e8d4c', brightYellow: '#a05f18',
      brightBlue: '#194997', brightMagenta: '#159b4b', brightCyan: '#134c97', brightWhite: '#182b27'
    },
    semantic: { ok: '#1e8d4c', warn: '#a05f18', error: '#ad1c26', tool: '#194997' },
    glass: { backgroundGlow: '#aacdcb', tint: '#e0e3e3', rim: '#559898', blurPx: 18, saturation: 1.33, surfaceOpacity: 0.45, strongOpacity: 0.76, rimOpacity: 0.29, glowOpacity: 0.28 }
  },
  {
    name: 'lg-silver-ink', label: "Silver Ink", description: "liquid silver", mode: 'light',
    colors: {
      background: '#f8f8f8', foreground: '#351e1a', card: '#ecebeb', cardForeground: '#351e1a',
      muted: '#f0efef', mutedForeground: '#7d3a36', popover: '#ecebeb', popoverForeground: '#351e1a',
      primary: '#8217a6', primaryForeground: '#ffffff', secondary: '#ddd0cd', secondaryForeground: '#000000',
      accent: '#1a36a2', accentForeground: '#ffffff', border: '#a1795e', input: '#ecebeb', ring: '#a11447',
      midground: '#a11447', midgroundForeground: '#ffffff', composerRing: '#a11447',
      destructive: '#9d191c', destructiveForeground: '#ffffff', sidebarBackground: '#ecebeb', sidebarBorder: '#a1795e',
      userBubble: '#ddd0cd', userBubbleBorder: '#a11447'
    },
    darkColors: null,
    terminal: {
      foreground: '#351e1a', cursor: '#a11447', selectionBackground: '#ddd0cd', black: '#f8f8f8',
      red: '#9d191c', green: '#1a9e60', yellow: '#a67516', blue: '#1a36a2', magenta: '#8217a6', cyan: '#a11447', white: '#351e1a',
      brightBlack: '#7d3a36', brightRed: '#9d191c', brightGreen: '#1a9e60', brightYellow: '#a67516',
      brightBlue: '#1a36a2', brightMagenta: '#8217a6', brightCyan: '#a11447', brightWhite: '#351e1a'
    },
    semantic: { ok: '#1a9e60', warn: '#a67516', error: '#9d191c', tool: '#1a36a2' },
    glass: { backgroundGlow: '#d2c0b6', tint: '#e9e7e7', rim: '#a1795e', blurPx: 20, saturation: 1.39, surfaceOpacity: 0.49, strongOpacity: 0.79, rimOpacity: 0.34, glowOpacity: 0.31 }
  },
  {
    name: 'lg-carbon-glass', label: "Carbon Glass", description: "hard carbon", mode: 'dark',
    colors: {
      background: '#151515', foreground: '#f2f0f0', card: '#363535', cardForeground: '#f2f0f0',
      muted: '#2b2a2a', mutedForeground: '#bb9c9a', popover: '#363535', popoverForeground: '#f2f0f0',
      primary: '#65d5ec', primaryForeground: '#000000', secondary: '#60514d', secondaryForeground: '#ffffff',
      accent: '#87bce8', accentForeground: '#000000', border: '#927463', input: '#363535', ring: '#7f85f2',
      midground: '#7f85f2', midgroundForeground: '#000000', composerRing: '#7f85f2',
      destructive: '#ef8284', destructiveForeground: '#000000', sidebarBackground: '#363535', sidebarBorder: '#927463',
      userBubble: '#60514d', userBubbleBorder: '#7f85f2'
    },
    darkColors: null,
    terminal: {
      foreground: '#f2f0f0', cursor: '#7f85f2', selectionBackground: '#60514d', black: '#151515',
      red: '#ef8284', green: '#7adcb9', yellow: '#e1ec65', blue: '#87bce8', magenta: '#65d5ec', cyan: '#7f85f2', white: '#f2f0f0',
      brightBlack: '#bb9c9a', brightRed: '#ef8284', brightGreen: '#7adcb9', brightYellow: '#e1ec65',
      brightBlue: '#87bce8', brightMagenta: '#65d5ec', brightCyan: '#7f85f2', brightWhite: '#f2f0f0'
    },
    semantic: { ok: '#7adcb9', warn: '#e1ec65', error: '#ef8284', tool: '#87bce8' },
    glass: { backgroundGlow: '#6c5b53', tint: '#3d3c3c', rim: '#927463', blurPx: 22, saturation: 1.45, surfaceOpacity: 0.54, strongOpacity: 0.82, rimOpacity: 0.38, glowOpacity: 0.35 }
  },
  {
    name: 'lg-crt-aqua', label: "CRT Aqua", description: "scanline glow", mode: 'dark',
    colors: {
      background: '#0c2424', foreground: '#e5eaeb', card: '#0f3439', cardForeground: '#e5eaeb',
      muted: '#0e2e31', mutedForeground: '#aebebf', popover: '#0f3439', popoverForeground: '#e5eaeb',
      primary: '#eeda75', primaryForeground: '#000000', secondary: '#0d5a6d', secondaryForeground: '#ffffff',
      accent: '#709deb', accentForeground: '#000000', border: '#2f9ddd', input: '#0f3439', ring: '#81f06a',
      midground: '#81f06a', midgroundForeground: '#000000', composerRing: '#81f06a',
      destructive: '#ec6969', destructiveForeground: '#000000', sidebarBackground: '#0f3439', sidebarBorder: '#2f9ddd',
      userBubble: '#0d5a6d', userBubbleBorder: '#81f06a'
    },
    darkColors: null,
    terminal: {
      foreground: '#e5eaeb', cursor: '#81f06a', selectionBackground: '#0d5a6d', black: '#0c2424',
      red: '#ec6969', green: '#5edec0', yellow: '#eec975', blue: '#709deb', magenta: '#eeda75', cyan: '#81f06a', white: '#e5eaeb',
      brightBlack: '#aebebf', brightRed: '#ec6969', brightGreen: '#5edec0', brightYellow: '#eec975',
      brightBlue: '#709deb', brightMagenta: '#eeda75', brightCyan: '#81f06a', brightWhite: '#e5eaeb'
    },
    semantic: { ok: '#5edec0', warn: '#eec975', error: '#ec6969', tool: '#709deb' },
    glass: { backgroundGlow: '#0c5b7d', tint: '#10373c', rim: '#2f9ddd', blurPx: 24, saturation: 1.06, surfaceOpacity: 0.58, strongOpacity: 0.86, rimOpacity: 0.42, glowOpacity: 0.1 }
  },
  {
    name: 'lg-arcade-cherry', label: "Arcade Cherry", description: "cabinet gloss", mode: 'dark',
    colors: {
      background: '#29130d', foreground: '#f3f0ef', card: '#432212', cardForeground: '#f3f0ef',
      muted: '#391c10', mutedForeground: '#cbbeb9', popover: '#432212', popoverForeground: '#f3f0ef',
      primary: '#aa84f0', primaryForeground: '#000000', secondary: '#783d0f', secondaryForeground: '#ffffff',
      accent: '#7d93f2', accentForeground: '#000000', border: '#e0a142', input: '#432212', ring: '#f27fb1',
      midground: '#f27fb1', midgroundForeground: '#000000', composerRing: '#f27fb1',
      destructive: '#ed8682', destructiveForeground: '#000000', sidebarBackground: '#432212', sidebarBorder: '#e0a142',
      userBubble: '#783d0f', userBubbleBorder: '#f27fb1'
    },
    darkColors: null,
    terminal: {
      foreground: '#f3f0ef', cursor: '#f27fb1', selectionBackground: '#783d0f', black: '#29130d',
      red: '#ed8682', green: '#70e8dd', yellow: '#f0d984', blue: '#7d93f2', magenta: '#aa84f0', cyan: '#f27fb1', white: '#f3f0ef',
      brightBlack: '#cbbeb9', brightRed: '#ed8682', brightGreen: '#70e8dd', brightYellow: '#f0d984',
      brightBlue: '#7d93f2', brightMagenta: '#aa84f0', brightCyan: '#f27fb1', brightWhite: '#f3f0ef'
    },
    semantic: { ok: '#70e8dd', warn: '#f0d984', error: '#ed8682', tool: '#7d93f2' },
    glass: { backgroundGlow: '#8f520c', tint: '#462412', rim: '#e0a142', blurPx: 26, saturation: 1.11, surfaceOpacity: 0.63, strongOpacity: 0.9, rimOpacity: 0.47, glowOpacity: 0.14 }
  },
  {
    name: 'lg-violet-vhs', label: "Violet VHS", description: "tape haze", mode: 'dark',
    colors: {
      background: '#0c0611', foreground: '#e9e6ea', card: '#2f133b', cardForeground: '#e9e6ea',
      muted: '#261031', mutedForeground: '#af9db9', popover: '#2f133b', popoverForeground: '#e9e6ea',
      primary: '#65ecd5', primaryForeground: '#000000', secondary: '#691480', secondaryForeground: '#ffffff',
      accent: '#7676e5', accentForeground: '#000000', border: '#ca22d3', input: '#2f133b', ring: '#6a9ef0',
      midground: '#6a9ef0', midgroundForeground: '#000000', composerRing: '#6a9ef0',
      destructive: '#ec7b69', destructiveForeground: '#000000', sidebarBackground: '#2f133b', sidebarBorder: '#ca22d3',
      userBubble: '#691480', userBubbleBorder: '#6a9ef0'
    },
    darkColors: null,
    terminal: {
      foreground: '#e9e6ea', cursor: '#6a9ef0', selectionBackground: '#691480', black: '#0c0611',
      red: '#ec7b69', green: '#66d295', yellow: '#ecda65', blue: '#7676e5', magenta: '#65ecd5', cyan: '#6a9ef0', white: '#e9e6ea',
      brightBlack: '#af9db9', brightRed: '#ec7b69', brightGreen: '#66d295', brightYellow: '#ecda65',
      brightBlue: '#7676e5', brightMagenta: '#65ecd5', brightCyan: '#6a9ef0', brightWhite: '#e9e6ea'
    },
    semantic: { ok: '#66d295', warn: '#ecda65', error: '#ec7b69', tool: '#7676e5' },
    glass: { backgroundGlow: '#891698', tint: '#3c184b', rim: '#ca22d3', blurPx: 28, saturation: 1.17, surfaceOpacity: 0.36, strongOpacity: 0.72, rimOpacity: 0.2, glowOpacity: 0.17 }
  },
  {
    name: 'lg-amber-terminal', label: "Amber Terminal", description: "tube glass", mode: 'dark',
    colors: {
      background: '#161207', foreground: '#f3f2ef', card: '#493e12', cardForeground: '#f3f2ef',
      muted: '#3b320f', mutedForeground: '#c4bda8', popover: '#493e12', popoverForeground: '#f3f2ef',
      primary: '#75d0ee', primaryForeground: '#000000', secondary: '#8f8212', secondaryForeground: '#000000',
      accent: '#9682ed', accentForeground: '#000000', border: '#d1dd2f', input: '#493e12', ring: '#9c7ff2',
      midground: '#9c7ff2', midgroundForeground: '#000000', composerRing: '#9c7ff2',
      destructive: '#ed9680', destructiveForeground: '#000000', sidebarBackground: '#493e12', sidebarBorder: '#d1dd2f',
      userBubble: '#8f8212', userBubbleBorder: '#9c7ff2'
    },
    darkColors: null,
    terminal: {
      foreground: '#f3f2ef', cursor: '#9c7ff2', selectionBackground: '#8f8212', black: '#161207',
      red: '#ed9680', green: '#76e2ad', yellow: '#eee875', blue: '#9682ed', magenta: '#75d0ee', cyan: '#9c7ff2', white: '#f3f2ef',
      brightBlack: '#c4bda8', brightRed: '#ed9680', brightGreen: '#76e2ad', brightYellow: '#eee875',
      brightBlue: '#9682ed', brightMagenta: '#75d0ee', brightCyan: '#9c7ff2', brightWhite: '#f3f2ef'
    },
    semantic: { ok: '#76e2ad', warn: '#eee875', error: '#ed9680', tool: '#9682ed' },
    glass: { backgroundGlow: '#b2b20d', tint: '#594c16', rim: '#d1dd2f', blurPx: 30, saturation: 1.23, surfaceOpacity: 0.4, strongOpacity: 0.76, rimOpacity: 0.24, glowOpacity: 0.21 }
  },
  {
    name: 'lg-synthwave-glass', label: "Synthwave Glass", description: "sunset grid", mode: 'dark',
    colors: {
      background: '#1b0816', foreground: '#ece4e9', card: '#54143d', cardForeground: '#ece4e9',
      muted: '#431031', mutedForeground: '#c9bac5', popover: '#54143d', popoverForeground: '#ece4e9',
      primary: '#87e8eb', primaryForeground: '#000000', secondary: '#9a135d', secondaryForeground: '#ffffff',
      accent: '#6aecf0', accentForeground: '#000000', border: '#e0427f', input: '#54143d', ring: '#936af0',
      midground: '#936af0', midgroundForeground: '#000000', composerRing: '#936af0',
      destructive: '#ec8c69', destructiveForeground: '#000000', sidebarBackground: '#54143d', sidebarBorder: '#e0427f',
      userBubble: '#9a135d', userBubbleBorder: '#936af0'
    },
    darkColors: null,
    terminal: {
      foreground: '#ece4e9', cursor: '#936af0', selectionBackground: '#9a135d', black: '#1b0816',
      red: '#ec8c69', green: '#55eaaf', yellow: '#ecf084', blue: '#6aecf0', magenta: '#87e8eb', cyan: '#936af0', white: '#ece4e9',
      brightBlack: '#c9bac5', brightRed: '#ec8c69', brightGreen: '#55eaaf', brightYellow: '#ecf084',
      brightBlue: '#6aecf0', brightMagenta: '#87e8eb', brightCyan: '#936af0', brightWhite: '#ece4e9'
    },
    semantic: { ok: '#55eaaf', warn: '#ecf084', error: '#ec8c69', tool: '#6aecf0' },
    glass: { backgroundGlow: '#81083f', tint: '#631747', rim: '#e0427f', blurPx: 10, saturation: 1.28, surfaceOpacity: 0.45, strongOpacity: 0.79, rimOpacity: 0.29, glowOpacity: 0.24 }
  },
  {
    name: 'lg-oil-slick', label: "Oil Slick", description: "iridescent heavy", mode: 'dark',
    colors: {
      background: '#0d1c0e', foreground: '#f0f2f0', card: '#15311a', cardForeground: '#f0f2f0',
      muted: '#122a16', mutedForeground: '#9fb7a2', popover: '#15311a', popoverForeground: '#f0f2f0',
      primary: '#e165ec', primaryForeground: '#000000', secondary: '#18622d', secondaryForeground: '#ffffff',
      accent: '#87d3e8', accentForeground: '#000000', border: '#27ce72', input: '#15311a', ring: '#f27fa2',
      midground: '#f27fa2', midgroundForeground: '#000000', composerRing: '#f27fa2',
      destructive: '#ec7f8f', destructiveForeground: '#000000', sidebarBackground: '#15311a', sidebarBorder: '#27ce72',
      userBubble: '#18622d', userBubbleBorder: '#f27fa2'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0f2f0', cursor: '#f27fa2', selectionBackground: '#18622d', black: '#0d1c0e',
      red: '#ec7f8f', green: '#7cdbbf', yellow: '#ecbd65', blue: '#87d3e8', magenta: '#e165ec', cyan: '#f27fa2', white: '#f0f2f0',
      brightBlack: '#9fb7a2', brightRed: '#ec7f8f', brightGreen: '#7cdbbf', brightYellow: '#ecbd65',
      brightBlue: '#87d3e8', brightMagenta: '#e165ec', brightCyan: '#f27fa2', brightWhite: '#f0f2f0'
    },
    semantic: { ok: '#7cdbbf', warn: '#ecbd65', error: '#ec7f8f', tool: '#87d3e8' },
    glass: { backgroundGlow: '#1e7e43', tint: '#17361d', rim: '#27ce72', blurPx: 12, saturation: 1.33, surfaceOpacity: 0.49, strongOpacity: 0.82, rimOpacity: 0.34, glowOpacity: 0.28 }
  },
  {
    name: 'lg-mercury-bloom', label: "Mercury Bloom", description: "metal flower", mode: 'light',
    colors: {
      background: '#f2f2f3', foreground: '#251c33', card: '#dedce2', cardForeground: '#251c33',
      muted: '#e5e4e8', mutedForeground: '#4c3b78', popover: '#dedce2', popoverForeground: '#251c33',
      primary: '#159b51', primaryForeground: '#000000', secondary: '#c6bad6', secondaryForeground: '#000000',
      accent: '#1b1997', accentForeground: '#ffffff', border: '#7f519d', input: '#dedce2', ring: '#136b97',
      midground: '#136b97', midgroundForeground: '#ffffff', composerRing: '#136b97',
      destructive: '#9e231a', destructiveForeground: '#ffffff', sidebarBackground: '#dedce2', sidebarBorder: '#7f519d',
      userBubble: '#c6bad6', userBubbleBorder: '#136b97'
    },
    darkColors: null,
    terminal: {
      foreground: '#251c33', cursor: '#136b97', selectionBackground: '#c6bad6', black: '#f2f2f3',
      red: '#9e231a', green: '#1e8d4a', yellow: '#9a8615', blue: '#1b1997', magenta: '#159b51', cyan: '#136b97', white: '#251c33',
      brightBlack: '#4c3b78', brightRed: '#9e231a', brightGreen: '#1e8d4a', brightYellow: '#9a8615',
      brightBlue: '#1b1997', brightMagenta: '#159b51', brightCyan: '#136b97', brightWhite: '#251c33'
    },
    semantic: { ok: '#1e8d4a', warn: '#9a8615', error: '#9e231a', tool: '#1b1997' },
    glass: { backgroundGlow: '#c6b3d6', tint: '#dbd9df', rim: '#7f519d', blurPx: 14, saturation: 1.39, surfaceOpacity: 0.54, strongOpacity: 0.86, rimOpacity: 0.38, glowOpacity: 0.31 }
  },
  {
    name: 'lg-infrared-snow', label: "Infrared Snow", description: "cold hot inversion", mode: 'light',
    colors: {
      background: '#f6f5f5', foreground: '#3c251e', card: '#e7e2e1', cardForeground: '#3c251e',
      muted: '#ede9e9', mutedForeground: '#864539', popover: '#e7e2e1', popoverForeground: '#3c251e',
      primary: '#2317a6', primaryForeground: '#ffffff', secondary: '#ddc9c0', secondaryForeground: '#000000',
      accent: '#361aa2', accentForeground: '#ffffff', border: '#ad7e52', input: '#e7e2e1', ring: '#a1147d',
      midground: '#a1147d', midgroundForeground: '#ffffff', composerRing: '#a1147d',
      destructive: '#b03021', destructiveForeground: '#ffffff', sidebarBackground: '#e7e2e1', sidebarBorder: '#ad7e52',
      userBubble: '#ddc9c0', userBubbleBorder: '#a1147d'
    },
    darkColors: null,
    terminal: {
      foreground: '#3c251e', cursor: '#a1147d', selectionBackground: '#ddc9c0', black: '#f6f5f5',
      red: '#b03021', green: '#1a9e5e', yellow: '#aa9b19', blue: '#361aa2', magenta: '#2317a6', cyan: '#a1147d', white: '#3c251e',
      brightBlack: '#864539', brightRed: '#b03021', brightGreen: '#1a9e5e', brightYellow: '#aa9b19',
      brightBlue: '#361aa2', brightMagenta: '#2317a6', brightCyan: '#a1147d', brightWhite: '#3c251e'
    },
    semantic: { ok: '#1a9e5e', warn: '#aa9b19', error: '#b03021', tool: '#361aa2' },
    glass: { backgroundGlow: '#decabc', tint: '#e5e0df', rim: '#ad7e52', blurPx: 16, saturation: 1.45, surfaceOpacity: 0.58, strongOpacity: 0.9, rimOpacity: 0.42, glowOpacity: 0.35 }
  },
  {
    name: 'lg-radioactive-milk', label: "Radioactive Milk", description: "toxic milky", mode: 'light',
    colors: {
      background: '#f8f9f7', foreground: '#192315', card: '#ebf0e8', cardForeground: '#192315',
      muted: '#eef2eb', mutedForeground: '#466237', popover: '#ebf0e8', popoverForeground: '#192315',
      primary: '#901490', primaryForeground: '#ffffff', secondary: '#c8eac0', secondaryForeground: '#000000',
      accent: '#177d8c', accentForeground: '#ffffff', border: '#32ab30', input: '#ebf0e8', ring: '#8d1120',
      midground: '#8d1120', midgroundForeground: '#ffffff', composerRing: '#8d1120',
      destructive: '#9d381d', destructiveForeground: '#ffffff', sidebarBackground: '#ebf0e8', sidebarBorder: '#32ab30',
      userBubble: '#c8eac0', userBubbleBorder: '#8d1120'
    },
    darkColors: null,
    terminal: {
      foreground: '#192315', cursor: '#8d1120', selectionBackground: '#c8eac0', black: '#f8f9f7',
      red: '#9d381d', green: '#217d5b', yellow: '#8f5514', blue: '#177d8c', magenta: '#901490', cyan: '#8d1120', white: '#192315',
      brightBlack: '#466237', brightRed: '#9d381d', brightGreen: '#217d5b', brightYellow: '#8f5514',
      brightBlue: '#177d8c', brightMagenta: '#901490', brightCyan: '#8d1120', brightWhite: '#192315'
    },
    semantic: { ok: '#217d5b', warn: '#8f5514', error: '#9d381d', tool: '#177d8c' },
    glass: { backgroundGlow: '#90dc89', tint: '#e6ede2', rim: '#32ab30', blurPx: 18, saturation: 1.06, surfaceOpacity: 0.63, strongOpacity: 0.72, rimOpacity: 0.47, glowOpacity: 0.1 }
  },
  {
    name: 'lg-void-citrus', label: "Void Citrus", description: "dark sour", mode: 'dark',
    colors: {
      background: '#0e1607', foreground: '#f0f3ef', card: '#284d16', cardForeground: '#f0f3ef',
      muted: '#213e12', mutedForeground: '#b4c1ac', popover: '#284d16', popoverForeground: '#f0f3ef',
      primary: '#ee7587', primaryForeground: '#000000', secondary: '#339a13', secondaryForeground: '#000000',
      accent: '#8287ed', accentForeground: '#000000', border: '#3add2f', input: '#284d16', ring: '#f2e17f',
      midground: '#f2e17f', midgroundForeground: '#000000', composerRing: '#f2e17f',
      destructive: '#ef897e', destructiveForeground: '#000000', sidebarBackground: '#284d16', sidebarBorder: '#3add2f',
      userBubble: '#339a13', userBubbleBorder: '#f2e17f'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0f3ef', cursor: '#f2e17f', selectionBackground: '#339a13', black: '#0e1607',
      red: '#ef897e', green: '#72e6b5', yellow: '#eeec75', blue: '#8287ed', magenta: '#ee7587', cyan: '#f2e17f', white: '#f0f3ef',
      brightBlack: '#b4c1ac', brightRed: '#ef897e', brightGreen: '#72e6b5', brightYellow: '#eeec75',
      brightBlue: '#8287ed', brightMagenta: '#ee7587', brightCyan: '#f2e17f', brightWhite: '#f0f3ef'
    },
    semantic: { ok: '#72e6b5', warn: '#eeec75', error: '#ef897e', tool: '#8287ed' },
    glass: { backgroundGlow: '#208c10', tint: '#305f1b', rim: '#3add2f', blurPx: 20, saturation: 1.11, surfaceOpacity: 0.36, strongOpacity: 0.76, rimOpacity: 0.2, glowOpacity: 0.14 }
  },
  {
    name: 'lg-obsidian-aurora', label: "Obsidian Aurora", description: "obsidian aurora glass", mode: 'dark',
    colors: {
      background: '#05140f', foreground: '#f0dae2', card: '#235745', cardForeground: '#f0dae2',
      muted: '#183f32', mutedForeground: '#b59bad', popover: '#235745', popoverForeground: '#f0dae2',
      primary: '#9a20c8', primaryForeground: '#ffffff', secondary: '#12522e', secondaryForeground: '#ffffff',
      accent: '#5de12c', accentForeground: '#000000', border: '#942b28', input: '#235745', ring: '#52dfb6',
      midground: '#52dfb6', midgroundForeground: '#000000', composerRing: '#52dfb6',
      destructive: '#ca553b', destructiveForeground: '#000000', sidebarBackground: '#235745', sidebarBorder: '#942b28',
      userBubble: '#12522e', userBubbleBorder: '#52dfb6'
    },
    darkColors: null,
    terminal: {
      foreground: '#f0dae2', cursor: '#52dfb6', selectionBackground: '#12522e', black: '#05140f',
      red: '#ca553b', green: '#42ba81', yellow: '#e1ed53', blue: '#5de12c', magenta: '#9a20c8', cyan: '#52dfb6', white: '#f0dae2',
      brightBlack: '#b59bad', brightRed: '#ca553b', brightGreen: '#42ba81', brightYellow: '#e1ed53',
      brightBlue: '#5de12c', brightMagenta: '#9a20c8', brightCyan: '#52dfb6', brightWhite: '#f0dae2'
    },
    semantic: { ok: '#42ba81', warn: '#e1ed53', error: '#ca553b', tool: '#5de12c' },
    glass: { backgroundGlow: '#d29236', tint: '#28634f', rim: '#942b28', blurPx: 18, saturation: 1.22, surfaceOpacity: 0.55, strongOpacity: 0.85, rimOpacity: 0.45, glowOpacity: 0.13 }
  },
  {
    name: 'lg-coral-static', label: "Coral Static", description: "coral static glass", mode: 'light',
    colors: {
      background: '#f8cfd2', foreground: '#0c2e2b', card: '#e4a6a7', cardForeground: '#0c2e2b',
      muted: '#e9b1b3', mutedForeground: '#204939', popover: '#e4a6a7', popoverForeground: '#0c2e2b',
      primary: '#0c2c75', primaryForeground: '#ffffff', secondary: '#d57a83', secondaryForeground: '#000000',
      accent: '#632d04', accentForeground: '#ffffff', border: '#1e1992', input: '#e4a6a7', ring: '#62036a',
      midground: '#62036a', midgroundForeground: '#ffffff', composerRing: '#62036a',
      destructive: '#721417', destructiveForeground: '#ffffff', sidebarBackground: '#e4a6a7', sidebarBorder: '#1e1992',
      userBubble: '#d57a83', userBubbleBorder: '#62036a'
    },
    darkColors: null,
    terminal: {
      foreground: '#0c2e2b', cursor: '#62036a', selectionBackground: '#d57a83', black: '#f8cfd2',
      red: '#721417', green: '#095d16', yellow: '#855d04', blue: '#632d04', magenta: '#0c2c75', cyan: '#62036a', white: '#0c2e2b',
      brightBlack: '#204939', brightRed: '#721417', brightGreen: '#095d16', brightYellow: '#855d04',
      brightBlue: '#632d04', brightMagenta: '#0c2c75', brightCyan: '#62036a', brightWhite: '#0c2e2b'
    },
    semantic: { ok: '#095d16', warn: '#855d04', error: '#721417', tool: '#632d04' },
    glass: { backgroundGlow: '#5435b4', tint: '#dd9999', rim: '#1e1992', blurPx: 22, saturation: 1.35, surfaceOpacity: 0.34, strongOpacity: 0.75, rimOpacity: 0.23, glowOpacity: 0.18 }
  },
  {
    name: 'lg-alpine-neon', label: "Alpine Neon", description: "alpine neon glass", mode: 'dark',
    colors: {
      background: '#050a03', foreground: '#e9e0ed', card: '#0a3c0c', cardForeground: '#e9e0ed',
      muted: '#082a08', mutedForeground: '#b4a7ce', popover: '#0a3c0c', popoverForeground: '#e9e0ed',
      primary: '#cb2c38', primaryForeground: '#ffffff', secondary: '#4f7612', secondaryForeground: '#ffffff',
      accent: '#55d3db', accentForeground: '#000000', border: '#3d6fc2', input: '#0a3c0c', ring: '#4752d8',
      midground: '#4752d8', midgroundForeground: '#ffffff', composerRing: '#4752d8',
      destructive: '#f63a37', destructiveForeground: '#000000', sidebarBackground: '#0a3c0c', sidebarBorder: '#3d6fc2',
      userBubble: '#4f7612', userBubbleBorder: '#4752d8'
    },
    darkColors: null,
    terminal: {
      foreground: '#e9e0ed', cursor: '#4752d8', selectionBackground: '#4f7612', black: '#050a03',
      red: '#f63a37', green: '#3dc79f', yellow: '#ebb561', blue: '#55d3db', magenta: '#cb2c38', cyan: '#4752d8', white: '#e9e0ed',
      brightBlack: '#b4a7ce', brightRed: '#f63a37', brightGreen: '#3dc79f', brightYellow: '#ebb561',
      brightBlue: '#55d3db', brightMagenta: '#cb2c38', brightCyan: '#4752d8', brightWhite: '#e9e0ed'
    },
    semantic: { ok: '#3dc79f', warn: '#ebb561', error: '#f63a37', tool: '#55d3db' },
    glass: { backgroundGlow: '#05cbd4', tint: '#0b440d', rim: '#3d6fc2', blurPx: 26, saturation: 1.05, surfaceOpacity: 0.41, strongOpacity: 0.86, rimOpacity: 0.32, glowOpacity: 0.23 }
  },
  {
    name: 'lg-velvet-eclipse', label: "Velvet Eclipse", description: "velvet eclipse glass", mode: 'light',
    colors: {
      background: '#cff6d1', foreground: '#291628', card: '#d5f1d6', cardForeground: '#291628',
      muted: '#d3f3d4', mutedForeground: '#4c245b', popover: '#d5f1d6', popoverForeground: '#291628',
      primary: '#802f0d', primaryForeground: '#ffffff', secondary: '#82df88', secondaryForeground: '#000000',
      accent: '#7a0f20', accentForeground: '#ffffff', border: '#2247a8', input: '#d5f1d6', ring: '#0c0a71',
      midground: '#0c0a71', midgroundForeground: '#ffffff', composerRing: '#0c0a71',
      destructive: '#671822', destructiveForeground: '#ffffff', sidebarBackground: '#d5f1d6', sidebarBorder: '#2247a8',
      userBubble: '#82df88', userBubbleBorder: '#0c0a71'
    },
    darkColors: null,
    terminal: {
      foreground: '#291628', cursor: '#0c0a71', selectionBackground: '#82df88', black: '#cff6d1',
      red: '#671822', green: '#0a661b', yellow: '#85561d', blue: '#7a0f20', magenta: '#802f0d', cyan: '#0c0a71', white: '#291628',
      brightBlack: '#4c245b', brightRed: '#671822', brightGreen: '#0a661b', brightYellow: '#85561d',
      brightBlue: '#7a0f20', brightMagenta: '#802f0d', brightCyan: '#0c0a71', brightWhite: '#291628'
    },
    semantic: { ok: '#0a661b', warn: '#85561d', error: '#671822', tool: '#7a0f20' },
    glass: { backgroundGlow: '#3a48ed', tint: '#d7f0d7', rim: '#2247a8', blurPx: 30, saturation: 1.18, surfaceOpacity: 0.48, strongOpacity: 0.76, rimOpacity: 0.41, glowOpacity: 0.28 }
  },
  {
    name: 'lg-glacier-ember', label: "Glacier Ember", description: "glacier ember glass", mode: 'dark',
    colors: {
      background: '#0f0413', foreground: '#ebfce4', card: '#2c1c45', cardForeground: '#ebfce4',
      muted: '#211333', mutedForeground: '#b4c894', popover: '#2c1c45', popoverForeground: '#ebfce4',
      primary: '#8aef3d', primaryForeground: '#000000', secondary: '#380e5a', secondaryForeground: '#ffffff',
      accent: '#2225e7', accentForeground: '#ffffff', border: '#247b9a', input: '#2c1c45', ring: '#ed5555',
      midground: '#ed5555', midgroundForeground: '#000000', composerRing: '#ed5555',
      destructive: '#f9546f', destructiveForeground: '#000000', sidebarBackground: '#2c1c45', sidebarBorder: '#247b9a',
      userBubble: '#380e5a', userBubbleBorder: '#ed5555'
    },
    darkColors: null,
    terminal: {
      foreground: '#ebfce4', cursor: '#ed5555', selectionBackground: '#380e5a', black: '#0f0413',
      red: '#f9546f', green: '#37bc96', yellow: '#edd737', blue: '#2225e7', magenta: '#8aef3d', cyan: '#ed5555', white: '#ebfce4',
      brightBlack: '#b4c894', brightRed: '#f9546f', brightGreen: '#37bc96', brightYellow: '#edd737',
      brightBlue: '#2225e7', brightMagenta: '#8aef3d', brightCyan: '#ed5555', brightWhite: '#ebfce4'
    },
    semantic: { ok: '#37bc96', warn: '#edd737', error: '#f9546f', tool: '#2225e7' },
    glass: { backgroundGlow: '#19d6a2', tint: '#30204d', rim: '#247b9a', blurPx: 12, saturation: 1.31, surfaceOpacity: 0.55, strongOpacity: 0.87, rimOpacity: 0.5, glowOpacity: 0.33 }
  },
  {
    name: 'lg-turmeric-sky', label: "Turmeric Sky", description: "turmeric sky glass", mode: 'light',
    colors: {
      background: '#faddf7', foreground: '#0d1e0e', card: '#f2aee5', cardForeground: '#0d1e0e',
      muted: '#f4bbea', mutedForeground: '#234a17', popover: '#f2aee5', popoverForeground: '#0d1e0e',
      primary: '#0e7909', primaryForeground: '#ffffff', secondary: '#d97ec0', secondaryForeground: '#000000',
      accent: '#645a0d', accentForeground: '#ffffff', border: '#2b306c', input: '#f2aee5', ring: '#7f0c04',
      midground: '#7f0c04', midgroundForeground: '#ffffff', composerRing: '#7f0c04',
      destructive: '#8e191b', destructiveForeground: '#ffffff', sidebarBackground: '#f2aee5', sidebarBorder: '#2b306c',
      userBubble: '#d97ec0', userBubbleBorder: '#7f0c04'
    },
    darkColors: null,
    terminal: {
      foreground: '#0d1e0e', cursor: '#7f0c04', selectionBackground: '#d97ec0', black: '#faddf7',
      red: '#8e191b', green: '#077f3f', yellow: '#826e11', blue: '#645a0d', magenta: '#0e7909', cyan: '#7f0c04', white: '#0d1e0e',
      brightBlack: '#234a17', brightRed: '#8e191b', brightGreen: '#077f3f', brightYellow: '#826e11',
      brightBlue: '#645a0d', brightMagenta: '#0e7909', brightCyan: '#7f0c04', brightWhite: '#0d1e0e'
    },
    semantic: { ok: '#077f3f', warn: '#826e11', error: '#8e191b', tool: '#645a0d' },
    glass: { backgroundGlow: '#4c3cd2', tint: '#efa0e0', rim: '#2b306c', blurPx: 16, saturation: 1.44, surfaceOpacity: 0.34, strongOpacity: 0.77, rimOpacity: 0.28, glowOpacity: 0.1 }
  },
  {
    name: 'lg-peacock-noir', label: "Peacock Noir", description: "peacock noir glass", mode: 'dark',
    colors: {
      background: '#0f0d05', foreground: '#e5e8f3', card: '#413918', cardForeground: '#e5e8f3',
      muted: '#2e2911', mutedForeground: '#a5bdd1', popover: '#413918', popoverForeground: '#e5e8f3',
      primary: '#1d4ee8', primaryForeground: '#ffffff', secondary: '#6a6729', secondaryForeground: '#ffffff',
      accent: '#6397d8', accentForeground: '#000000', border: '#a41faa', input: '#413918', ring: '#33ef3c',
      midground: '#33ef3c', midgroundForeground: '#000000', composerRing: '#33ef3c',
      destructive: '#e9213d', destructiveForeground: '#000000', sidebarBackground: '#413918', sidebarBorder: '#a41faa',
      userBubble: '#6a6729', userBubbleBorder: '#33ef3c'
    },
    darkColors: null,
    terminal: {
      foreground: '#e5e8f3', cursor: '#33ef3c', selectionBackground: '#6a6729', black: '#0f0d05',
      red: '#e9213d', green: '#6be4ba', yellow: '#dee242', blue: '#6397d8', magenta: '#1d4ee8', cyan: '#33ef3c', white: '#e5e8f3',
      brightBlack: '#a5bdd1', brightRed: '#e9213d', brightGreen: '#6be4ba', brightYellow: '#dee242',
      brightBlue: '#6397d8', brightMagenta: '#1d4ee8', brightCyan: '#33ef3c', brightWhite: '#e5e8f3'
    },
    semantic: { ok: '#6be4ba', warn: '#dee242', error: '#e9213d', tool: '#6397d8' },
    glass: { backgroundGlow: '#db2e88', tint: '#483f1b', rim: '#a41faa', blurPx: 20, saturation: 1.14, surfaceOpacity: 0.41, strongOpacity: 0.88, rimOpacity: 0.37, glowOpacity: 0.15 }
  },
  {
    name: 'lg-blush-voltage', label: "Blush Voltage", description: "blush voltage glass", mode: 'light',
    colors: {
      background: '#ebeefd', foreground: '#13110a', card: '#bfbbe2', cardForeground: '#13110a',
      muted: '#cccaea', mutedForeground: '#5b3b19', popover: '#bfbbe2', popoverForeground: '#13110a',
      primary: '#571618', primaryForeground: '#ffffff', secondary: '#838fc2', secondaryForeground: '#000000',
      accent: '#7d0f34', accentForeground: '#ffffff', border: '#562377', input: '#bfbbe2', ring: '#351973',
      midground: '#351973', midgroundForeground: '#ffffff', composerRing: '#351973',
      destructive: '#880e12', destructiveForeground: '#ffffff', sidebarBackground: '#bfbbe2', sidebarBorder: '#562377',
      userBubble: '#838fc2', userBubbleBorder: '#351973'
    },
    darkColors: null,
    terminal: {
      foreground: '#13110a', cursor: '#351973', selectionBackground: '#838fc2', black: '#ebeefd',
      red: '#880e12', green: '#0e7f73', yellow: '#643d05', blue: '#7d0f34', magenta: '#571618', cyan: '#351973', white: '#13110a',
      brightBlack: '#5b3b19', brightRed: '#880e12', brightGreen: '#0e7f73', brightYellow: '#643d05',
      brightBlue: '#7d0f34', brightMagenta: '#571618', brightCyan: '#351973', brightWhite: '#13110a'
    },
    semantic: { ok: '#0e7f73', warn: '#643d05', error: '#880e12', tool: '#7d0f34' },
    glass: { backgroundGlow: '#e841ed', tint: '#b2adda', rim: '#562377', blurPx: 24, saturation: 1.27, surfaceOpacity: 0.48, strongOpacity: 0.78, rimOpacity: 0.46, glowOpacity: 0.2 }
  },
  {
    name: 'lg-copper-lagoon', label: "Copper Lagoon", description: "copper lagoon glass", mode: 'dark',
    colors: {
      background: '#0c1f0e', foreground: '#f8f1f7', card: '#1c4329', cardForeground: '#f8f1f7',
      muted: '#16361e', mutedForeground: '#b19bb7', popover: '#1c4329', popoverForeground: '#f8f1f7',
      primary: '#5862f2', primaryForeground: '#ffffff', secondary: '#205937', secondaryForeground: '#ffffff',
      accent: '#486aca', accentForeground: '#ffffff', border: '#19529c', input: '#1c4329', ring: '#4bdc74',
      midground: '#4bdc74', midgroundForeground: '#000000', composerRing: '#4bdc74',
      destructive: '#d66763', destructiveForeground: '#000000', sidebarBackground: '#1c4329', sidebarBorder: '#19529c',
      userBubble: '#205937', userBubbleBorder: '#4bdc74'
    },
    darkColors: null,
    terminal: {
      foreground: '#f8f1f7', cursor: '#4bdc74', selectionBackground: '#205937', black: '#0c1f0e',
      red: '#d66763', green: '#40db64', yellow: '#cabc4e', blue: '#486aca', magenta: '#5862f2', cyan: '#4bdc74', white: '#f8f1f7',
      brightBlack: '#b19bb7', brightRed: '#d66763', brightGreen: '#40db64', brightYellow: '#cabc4e',
      brightBlue: '#486aca', brightMagenta: '#5862f2', brightCyan: '#4bdc74', brightWhite: '#f8f1f7'
    },
    semantic: { ok: '#40db64', warn: '#cabc4e', error: '#d66763', tool: '#486aca' },
    glass: { backgroundGlow: '#22d8c0', tint: '#1e482c', rim: '#19529c', blurPx: 28, saturation: 1.4, surfaceOpacity: 0.55, strongOpacity: 0.89, rimOpacity: 0.24, glowOpacity: 0.25 }
  },
  {
    name: 'lg-indigo-pollen', label: "Indigo Pollen", description: "indigo pollen glass", mode: 'light',
    colors: {
      background: '#fed8eb', foreground: '#05140c', card: '#e7a8c1', cardForeground: '#05140c',
      muted: '#eeb6ce', mutedForeground: '#12421a', popover: '#e7a8c1', popoverForeground: '#05140c',
      primary: '#022c69', primaryForeground: '#ffffff', secondary: '#da88b9', secondaryForeground: '#000000',
      accent: '#5e0f6d', accentForeground: '#ffffff', border: '#6c2a25', input: '#e7a8c1', ring: '#5a0716',
      midground: '#5a0716', midgroundForeground: '#ffffff', composerRing: '#5a0716',
      destructive: '#8d1311', destructiveForeground: '#ffffff', sidebarBackground: '#e7a8c1', sidebarBorder: '#6c2a25',
      userBubble: '#da88b9', userBubbleBorder: '#5a0716'
    },
    darkColors: null,
    terminal: {
      foreground: '#05140c', cursor: '#5a0716', selectionBackground: '#da88b9', black: '#fed8eb',
      red: '#8d1311', green: '#146c36', yellow: '#7a4912', blue: '#5e0f6d', magenta: '#022c69', cyan: '#5a0716', white: '#05140c',
      brightBlack: '#12421a', brightRed: '#8d1311', brightGreen: '#146c36', brightYellow: '#7a4912',
      brightBlue: '#5e0f6d', brightMagenta: '#022c69', brightCyan: '#5a0716', brightWhite: '#05140c'
    },
    semantic: { ok: '#146c36', warn: '#7a4912', error: '#8d1311', tool: '#5e0f6d' },
    glass: { backgroundGlow: '#b3464f', tint: '#e19bb6', rim: '#6c2a25', blurPx: 32, saturation: 1.1, surfaceOpacity: 0.34, strongOpacity: 0.79, rimOpacity: 0.33, glowOpacity: 0.3 }
  },
  {
    name: 'lg-cinder-mint', label: "Cinder Mint", description: "cinder mint glass", mode: 'dark',
    colors: {
      background: '#0d101e', foreground: '#f8f3d8', card: '#223142', cardForeground: '#f8f3d8',
      muted: '#1a2434', mutedForeground: '#c6ad92', popover: '#223142', popoverForeground: '#f8f3d8',
      primary: '#e61b22', primaryForeground: '#ffffff', secondary: '#0f3379', secondaryForeground: '#ffffff',
      accent: '#4caac3', accentForeground: '#000000', border: '#d94980', input: '#223142', ring: '#8d26d7',
      midground: '#8d26d7', midgroundForeground: '#ffffff', composerRing: '#8d26d7',
      destructive: '#e63734', destructiveForeground: '#000000', sidebarBackground: '#223142', sidebarBorder: '#d94980',
      userBubble: '#0f3379', userBubbleBorder: '#8d26d7'
    },
    darkColors: null,
    terminal: {
      foreground: '#f8f3d8', cursor: '#8d26d7', selectionBackground: '#0f3379', black: '#0d101e',
      red: '#e63734', green: '#34c37f', yellow: '#dce36d', blue: '#4caac3', magenta: '#e61b22', cyan: '#8d26d7', white: '#f8f3d8',
      brightBlack: '#c6ad92', brightRed: '#e63734', brightGreen: '#34c37f', brightYellow: '#dce36d',
      brightBlue: '#4caac3', brightMagenta: '#e61b22', brightCyan: '#8d26d7', brightWhite: '#f8f3d8'
    },
    semantic: { ok: '#34c37f', warn: '#dce36d', error: '#e63734', tool: '#4caac3' },
    glass: { backgroundGlow: '#db2ada', tint: '#243546', rim: '#d94980', blurPx: 14, saturation: 1.23, surfaceOpacity: 0.41, strongOpacity: 0.9, rimOpacity: 0.42, glowOpacity: 0.35 }
  },
  {
    name: 'lg-lemon-nebula', label: "Lemon Nebula", description: "lemon nebula glass", mode: 'light',
    colors: {
      background: '#eafce8', foreground: '#110412', card: '#adeabc', cardForeground: '#110412',
      muted: '#c0f0ca', mutedForeground: '#3c1a55', popover: '#adeabc', popoverForeground: '#110412',
      primary: '#122783', primaryForeground: '#ffffff', secondary: '#ace486', secondaryForeground: '#000000',
      accent: '#113070', accentForeground: '#ffffff', border: '#3f2d6f', input: '#adeabc', ring: '#0a713e',
      midground: '#0a713e', midgroundForeground: '#ffffff', composerRing: '#0a713e',
      destructive: '#87281d', destructiveForeground: '#ffffff', sidebarBackground: '#adeabc', sidebarBorder: '#3f2d6f',
      userBubble: '#ace486', userBubbleBorder: '#0a713e'
    },
    darkColors: null,
    terminal: {
      foreground: '#110412', cursor: '#0a713e', selectionBackground: '#ace486', black: '#eafce8',
      red: '#87281d', green: '#0e6555', yellow: '#643f07', blue: '#113070', magenta: '#122783', cyan: '#0a713e', white: '#110412',
      brightBlack: '#3c1a55', brightRed: '#87281d', brightGreen: '#0e6555', brightYellow: '#643f07',
      brightBlue: '#113070', brightMagenta: '#122783', brightCyan: '#0a713e', brightWhite: '#110412'
    },
    semantic: { ok: '#0e6555', warn: '#643f07', error: '#87281d', tool: '#113070' },
    glass: { backgroundGlow: '#3634b8', tint: '#9ee6b1', rim: '#3f2d6f', blurPx: 18, saturation: 1.36, surfaceOpacity: 0.48, strongOpacity: 0.8, rimOpacity: 0.2, glowOpacity: 0.12 }
  },
  {
    name: 'lg-wine-mercury', label: "Wine Mercury", description: "wine mercury glass", mode: 'dark',
    colors: {
      background: '#170202', foreground: '#dafbfc', card: '#2f0e12', cardForeground: '#dafbfc',
      muted: '#2a0b0f', mutedForeground: '#9ed0c1', popover: '#2f0e12', popoverForeground: '#dafbfc',
      primary: '#5840f1', primaryForeground: '#ffffff', secondary: '#731c18', secondaryForeground: '#ffffff',
      accent: '#c4a655', accentForeground: '#000000', border: '#a7643d', input: '#2f0e12', ring: '#d0140e',
      midground: '#d0140e', midgroundForeground: '#ffffff', composerRing: '#d0140e',
      destructive: '#d71f2e', destructiveForeground: '#ffffff', sidebarBackground: '#2f0e12', sidebarBorder: '#a7643d',
      userBubble: '#731c18', userBubbleBorder: '#d0140e'
    },
    darkColors: null,
    terminal: {
      foreground: '#dafbfc', cursor: '#d0140e', selectionBackground: '#731c18', black: '#170202',
      red: '#d71f2e', green: '#52c8b4', yellow: '#edbd43', blue: '#c4a655', magenta: '#5840f1', cyan: '#d0140e', white: '#dafbfc',
      brightBlack: '#9ed0c1', brightRed: '#d71f2e', brightGreen: '#52c8b4', brightYellow: '#edbd43',
      brightBlue: '#c4a655', brightMagenta: '#5840f1', brightCyan: '#d0140e', brightWhite: '#dafbfc'
    },
    semantic: { ok: '#52c8b4', warn: '#edbd43', error: '#d71f2e', tool: '#c4a655' },
    glass: { backgroundGlow: '#dbd242', tint: '#391319', rim: '#a7643d', blurPx: 22, saturation: 1.06, surfaceOpacity: 0.55, strongOpacity: 0.7, rimOpacity: 0.29, glowOpacity: 0.17 }
  },
  {
    name: 'lg-jade-signal', label: "Jade Signal", description: "jade signal glass", mode: 'light',
    colors: {
      background: '#f6ece1', foreground: '#0b1522', card: '#f0e6ac', cardForeground: '#0b1522',
      muted: '#f2e8bd', mutedForeground: '#2b535f', popover: '#f0e6ac', popoverForeground: '#0b1522',
      primary: '#071361', primaryForeground: '#ffffff', secondary: '#c2af9b', secondaryForeground: '#000000',
      accent: '#7b6f14', accentForeground: '#ffffff', border: '#aa7212', input: '#f0e6ac', ring: '#2f6e15',
      midground: '#2f6e15', midgroundForeground: '#ffffff', composerRing: '#2f6e15',
      destructive: '#681523', destructiveForeground: '#ffffff', sidebarBackground: '#f0e6ac', sidebarBorder: '#aa7212',
      userBubble: '#c2af9b', userBubbleBorder: '#2f6e15'
    },
    darkColors: null,
    terminal: {
      foreground: '#0b1522', cursor: '#2f6e15', selectionBackground: '#c2af9b', black: '#f6ece1',
      red: '#681523', green: '#177d28', yellow: '#6f4113', blue: '#7b6f14', magenta: '#071361', cyan: '#2f6e15', white: '#0b1522',
      brightBlack: '#2b535f', brightRed: '#681523', brightGreen: '#177d28', brightYellow: '#6f4113',
      brightBlue: '#7b6f14', brightMagenta: '#071361', brightCyan: '#2f6e15', brightWhite: '#0b1522'
    },
    semantic: { ok: '#177d28', warn: '#6f4113', error: '#681523', tool: '#7b6f14' },
    glass: { backgroundGlow: '#c13637', tint: '#eee5a0', rim: '#aa7212', blurPx: 26, saturation: 1.19, surfaceOpacity: 0.34, strongOpacity: 0.81, rimOpacity: 0.38, glowOpacity: 0.22 }
  },
  {
    name: 'lg-porcelain-flame', label: "Porcelain Flame", description: "porcelain flame glass", mode: 'dark',
    colors: {
      background: '#191a08', foreground: '#e1e0ed', card: '#4e4c11', cardForeground: '#e1e0ed',
      muted: '#42410f', mutedForeground: '#8e97b0', popover: '#4e4c11', popoverForeground: '#e1e0ed',
      primary: '#3161f8', primaryForeground: '#ffffff', secondary: '#79620c', secondaryForeground: '#ffffff',
      accent: '#b3c32c', accentForeground: '#000000', border: '#511a95', input: '#4e4c11', ring: '#fc3c18',
      midground: '#fc3c18', midgroundForeground: '#000000', composerRing: '#fc3c18',
      destructive: '#f77b7b', destructiveForeground: '#000000', sidebarBackground: '#4e4c11', sidebarBorder: '#511a95',
      userBubble: '#79620c', userBubbleBorder: '#fc3c18'
    },
    darkColors: null,
    terminal: {
      foreground: '#e1e0ed', cursor: '#fc3c18', selectionBackground: '#79620c', black: '#191a08',
      red: '#f77b7b', green: '#32d987', yellow: '#e0aa47', blue: '#b3c32c', magenta: '#3161f8', cyan: '#fc3c18', white: '#e1e0ed',
      brightBlack: '#8e97b0', brightRed: '#f77b7b', brightGreen: '#32d987', brightYellow: '#e0aa47',
      brightBlue: '#b3c32c', brightMagenta: '#3161f8', brightCyan: '#fc3c18', brightWhite: '#e1e0ed'
    },
    semantic: { ok: '#32d987', warn: '#e0aa47', error: '#f77b7b', tool: '#b3c32c' },
    glass: { backgroundGlow: '#dc41d7', tint: '#636114', rim: '#511a95', blurPx: 30, saturation: 1.32, surfaceOpacity: 0.41, strongOpacity: 0.71, rimOpacity: 0.47, glowOpacity: 0.27 }
  },
  {
    name: 'lg-cobalt-sand', label: "Cobalt Sand", description: "cobalt sand glass", mode: 'light',
    colors: {
      background: '#cdd3f6', foreground: '#1d1b10', card: '#a8b7e0', cardForeground: '#1d1b10',
      muted: '#b4c0e7', mutedForeground: '#4c3722', popover: '#a8b7e0', popoverForeground: '#1d1b10',
      primary: '#3f8713', primaryForeground: '#000000', secondary: '#7f9ad0', secondaryForeground: '#000000',
      accent: '#216b17', accentForeground: '#ffffff', border: '#851aa8', input: '#a8b7e0', ring: '#0a155b',
      midground: '#0a155b', midgroundForeground: '#ffffff', composerRing: '#0a155b',
      destructive: '#831b26', destructiveForeground: '#ffffff', sidebarBackground: '#a8b7e0', sidebarBorder: '#851aa8',
      userBubble: '#7f9ad0', userBubbleBorder: '#0a155b'
    },
    darkColors: null,
    terminal: {
      foreground: '#1d1b10', cursor: '#0a155b', selectionBackground: '#7f9ad0', black: '#cdd3f6',
      red: '#831b26', green: '#1c5e3d', yellow: '#6b4813', blue: '#216b17', magenta: '#3f8713', cyan: '#0a155b', white: '#1d1b10',
      brightBlack: '#4c3722', brightRed: '#831b26', brightGreen: '#1c5e3d', brightYellow: '#6b4813',
      brightBlue: '#216b17', brightMagenta: '#3f8713', brightCyan: '#0a155b', brightWhite: '#1d1b10'
    },
    semantic: { ok: '#1c5e3d', warn: '#6b4813', error: '#831b26', tool: '#216b17' },
    glass: { backgroundGlow: '#6d31bc', tint: '#a0b1db', rim: '#851aa8', blurPx: 12, saturation: 1.45, surfaceOpacity: 0.48, strongOpacity: 0.82, rimOpacity: 0.25, glowOpacity: 0.32 }
  },
  {
    name: 'lg-orchid-thunder', label: "Orchid Thunder", description: "orchid thunder glass", mode: 'dark',
    colors: {
      background: '#0c0608', foreground: '#dceae5', card: '#2c0c1b', cardForeground: '#dceae5',
      muted: '#250b17', mutedForeground: '#99d1ab', popover: '#2c0c1b', popoverForeground: '#dceae5',
      primary: '#2c45f9', primaryForeground: '#ffffff', secondary: '#480e31', secondaryForeground: '#ffffff',
      accent: '#f3ac50', accentForeground: '#000000', border: '#d7e437', input: '#2c0c1b', ring: '#0fe243',
      midground: '#0fe243', midgroundForeground: '#000000', composerRing: '#0fe243',
      destructive: '#dd3f58', destructiveForeground: '#000000', sidebarBackground: '#2c0c1b', sidebarBorder: '#d7e437',
      userBubble: '#480e31', userBubbleBorder: '#0fe243'
    },
    darkColors: null,
    terminal: {
      foreground: '#dceae5', cursor: '#0fe243', selectionBackground: '#480e31', black: '#0c0608',
      red: '#dd3f58', green: '#21e3c5', yellow: '#e3db25', blue: '#f3ac50', magenta: '#2c45f9', cyan: '#0fe243', white: '#dceae5',
      brightBlack: '#99d1ab', brightRed: '#dd3f58', brightGreen: '#21e3c5', brightYellow: '#e3db25',
      brightBlue: '#f3ac50', brightMagenta: '#2c45f9', brightCyan: '#0fe243', brightWhite: '#dceae5'
    },
    semantic: { ok: '#21e3c5', warn: '#e3db25', error: '#dd3f58', tool: '#f3ac50' },
    glass: { backgroundGlow: '#da7e3b', tint: '#390f23', rim: '#d7e437', blurPx: 16, saturation: 1.15, surfaceOpacity: 0.55, strongOpacity: 0.72, rimOpacity: 0.34, glowOpacity: 0.37 }
  },
  {
    name: 'lg-moss-plasma', label: "Moss Plasma", description: "moss plasma glass", mode: 'light',
    colors: {
      background: '#f9d6d2', foreground: '#142426', card: '#f2afb4', cardForeground: '#142426',
      muted: '#f5bcbe', mutedForeground: '#2c5d52', popover: '#f2afb4', popoverForeground: '#142426',
      primary: '#1b0980', primaryForeground: '#ffffff', secondary: '#e57482', secondaryForeground: '#000000',
      accent: '#808107', accentForeground: '#000000', border: '#2d0e67', input: '#f2afb4', ring: '#1f5b19',
      midground: '#1f5b19', midgroundForeground: '#ffffff', composerRing: '#1f5b19',
      destructive: '#810a1a', destructiveForeground: '#ffffff', sidebarBackground: '#f2afb4', sidebarBorder: '#2d0e67',
      userBubble: '#e57482', userBubbleBorder: '#1f5b19'
    },
    darkColors: null,
    terminal: {
      foreground: '#142426', cursor: '#1f5b19', selectionBackground: '#e57482', black: '#f9d6d2',
      red: '#810a1a', green: '#0f695e', yellow: '#826214', blue: '#808107', magenta: '#1b0980', cyan: '#1f5b19', white: '#142426',
      brightBlack: '#2c5d52', brightRed: '#810a1a', brightGreen: '#0f695e', brightYellow: '#826214',
      brightBlue: '#808107', brightMagenta: '#1b0980', brightCyan: '#1f5b19', brightWhite: '#142426'
    },
    semantic: { ok: '#0f695e', warn: '#826214', error: '#810a1a', tool: '#808107' },
    glass: { backgroundGlow: '#c74cc6', tint: '#f1a7ae', rim: '#2d0e67', blurPx: 20, saturation: 1.28, surfaceOpacity: 0.34, strongOpacity: 0.83, rimOpacity: 0.43, glowOpacity: 0.14 }
  },
  {
    name: 'lg-ruby-fog', label: "Ruby Fog", description: "ruby fog glass", mode: 'dark',
    colors: {
      background: '#06080e', foreground: '#eee7cf', card: '#120f2c', cardForeground: '#eee7cf',
      muted: '#0f0e25', mutedForeground: '#b7aea6', popover: '#120f2c', popoverForeground: '#eee7cf',
      primary: '#cc3b1b', primaryForeground: '#ffffff', secondary: '#263b53', secondaryForeground: '#ffffff',
      accent: '#cb2b97', accentForeground: '#ffffff', border: '#1cc612', input: '#120f2c', ring: '#0f42f9',
      midground: '#0f42f9', midgroundForeground: '#ffffff', composerRing: '#0f42f9',
      destructive: '#cb1c21', destructiveForeground: '#ffffff', sidebarBackground: '#120f2c', sidebarBorder: '#1cc612',
      userBubble: '#263b53', userBubbleBorder: '#0f42f9'
    },
    darkColors: null,
    terminal: {
      foreground: '#eee7cf', cursor: '#0f42f9', selectionBackground: '#263b53', black: '#06080e',
      red: '#cb1c21', green: '#5ad997', yellow: '#f4cc7b', blue: '#cb2b97', magenta: '#cc3b1b', cyan: '#0f42f9', white: '#eee7cf',
      brightBlack: '#b7aea6', brightRed: '#cb1c21', brightGreen: '#5ad997', brightYellow: '#f4cc7b',
      brightBlue: '#cb2b97', brightMagenta: '#cc3b1b', brightCyan: '#0f42f9', brightWhite: '#eee7cf'
    },
    semantic: { ok: '#5ad997', warn: '#f4cc7b', error: '#cb1c21', tool: '#cb2b97' },
    glass: { backgroundGlow: '#0dcc78', tint: '#171237', rim: '#1cc612', blurPx: 24, saturation: 1.41, surfaceOpacity: 0.41, strongOpacity: 0.73, rimOpacity: 0.21, glowOpacity: 0.19 }
  },
  {
    name: 'lg-cyan-leather', label: "Cyan Leather", description: "cyan leather glass", mode: 'light',
    colors: {
      background: '#eaf7ea', foreground: '#240825', card: '#a3e3b1', cardForeground: '#240825',
      muted: '#bbeac5', mutedForeground: '#401d57', popover: '#a3e3b1', popoverForeground: '#240825',
      primary: '#7c0f74', primaryForeground: '#ffffff', secondary: '#a2cd88', secondaryForeground: '#000000',
      accent: '#5d830b', accentForeground: '#000000', border: '#6f1051', input: '#a3e3b1', ring: '#064256',
      midground: '#064256', midgroundForeground: '#ffffff', composerRing: '#064256',
      destructive: '#90180a', destructiveForeground: '#ffffff', sidebarBackground: '#a3e3b1', sidebarBorder: '#6f1051',
      userBubble: '#a2cd88', userBubbleBorder: '#064256'
    },
    darkColors: null,
    terminal: {
      foreground: '#240825', cursor: '#064256', selectionBackground: '#a2cd88', black: '#eaf7ea',
      red: '#90180a', green: '#126827', yellow: '#7c4a08', blue: '#5d830b', magenta: '#7c0f74', cyan: '#064256', white: '#240825',
      brightBlack: '#401d57', brightRed: '#90180a', brightGreen: '#126827', brightYellow: '#7c4a08',
      brightBlue: '#5d830b', brightMagenta: '#7c0f74', brightCyan: '#064256', brightWhite: '#240825'
    },
    semantic: { ok: '#126827', warn: '#7c4a08', error: '#90180a', tool: '#5d830b' },
    glass: { backgroundGlow: '#d23d52', tint: '#95dfa6', rim: '#6f1051', blurPx: 28, saturation: 1.11, surfaceOpacity: 0.48, strongOpacity: 0.84, rimOpacity: 0.3, glowOpacity: 0.24 }
  },
  {
    name: 'lg-bronze-moon', label: "Bronze Moon", description: "bronze moon glass", mode: 'dark',
    colors: {
      background: '#0b0222', foreground: '#e9eddd', card: '#120b2f', cardForeground: '#e9eddd',
      muted: '#10092b', mutedForeground: '#d6d4b6', popover: '#120b2f', popoverForeground: '#e9eddd',
      primary: '#d2251a', primaryForeground: '#ffffff', secondary: '#39235e', secondaryForeground: '#ffffff',
      accent: '#a95fdf', accentForeground: '#000000', border: '#56b1d9', input: '#120b2f', ring: '#364ff7',
      midground: '#364ff7', midgroundForeground: '#ffffff', composerRing: '#364ff7',
      destructive: '#e21e2e', destructiveForeground: '#ffffff', sidebarBackground: '#120b2f', sidebarBorder: '#56b1d9',
      userBubble: '#39235e', userBubbleBorder: '#364ff7'
    },
    darkColors: null,
    terminal: {
      foreground: '#e9eddd', cursor: '#364ff7', selectionBackground: '#39235e', black: '#0b0222',
      red: '#e21e2e', green: '#3dc079', yellow: '#f4dc61', blue: '#a95fdf', magenta: '#d2251a', cyan: '#364ff7', white: '#e9eddd',
      brightBlack: '#d6d4b6', brightRed: '#e21e2e', brightGreen: '#3dc079', brightYellow: '#f4dc61',
      brightBlue: '#a95fdf', brightMagenta: '#d2251a', brightCyan: '#364ff7', brightWhite: '#e9eddd'
    },
    semantic: { ok: '#3dc079', warn: '#f4dc61', error: '#e21e2e', tool: '#a95fdf' },
    glass: { backgroundGlow: '#086ed7', tint: '#140e33', rim: '#56b1d9', blurPx: 32, saturation: 1.24, surfaceOpacity: 0.55, strongOpacity: 0.74, rimOpacity: 0.39, glowOpacity: 0.29 }
  },
  {
    name: 'lg-pistachio-night', label: "Pistachio Night", description: "pistachio night glass", mode: 'light',
    colors: {
      background: '#d2fce1', foreground: '#27071c', card: '#bbf2c4', cardForeground: '#27071c',
      muted: '#c3f5ce', mutedForeground: '#551553', popover: '#bbf2c4', popoverForeground: '#27071c',
      primary: '#691b0e', primaryForeground: '#ffffff', secondary: '#6bdab2', secondaryForeground: '#000000',
      accent: '#5c0d38', accentForeground: '#ffffff', border: '#161274', input: '#bbf2c4', ring: '#041f7b',
      midground: '#041f7b', midgroundForeground: '#ffffff', composerRing: '#041f7b',
      destructive: '#841214', destructiveForeground: '#ffffff', sidebarBackground: '#bbf2c4', sidebarBorder: '#161274',
      userBubble: '#6bdab2', userBubbleBorder: '#041f7b'
    },
    darkColors: null,
    terminal: {
      foreground: '#27071c', cursor: '#041f7b', selectionBackground: '#6bdab2', black: '#d2fce1',
      red: '#841214', green: '#05794b', yellow: '#896908', blue: '#5c0d38', magenta: '#691b0e', cyan: '#041f7b', white: '#27071c',
      brightBlack: '#551553', brightRed: '#841214', brightGreen: '#05794b', brightYellow: '#896908',
      brightBlue: '#5c0d38', brightMagenta: '#691b0e', brightCyan: '#041f7b', brightWhite: '#27071c'
    },
    semantic: { ok: '#05794b', warn: '#896908', error: '#841214', tool: '#5c0d38' },
    glass: { backgroundGlow: '#82c2eb', tint: '#b7f0bf', rim: '#161274', blurPx: 14, saturation: 1.37, surfaceOpacity: 0.34, strongOpacity: 0.85, rimOpacity: 0.48, glowOpacity: 0.34 }
  },
  {
    name: 'lg-ink-apricot', label: "Ink Apricot", description: "ink apricot glass", mode: 'dark',
    colors: {
      background: '#250a12', foreground: '#f5fcfa', card: '#38192c', cardForeground: '#f5fcfa',
      muted: '#331525', mutedForeground: '#8cc5a0', popover: '#38192c', popoverForeground: '#f5fcfa',
      primary: '#3ad647', primaryForeground: '#000000', secondary: '#731a43', secondaryForeground: '#ffffff',
      accent: '#ed49ea', accentForeground: '#000000', border: '#944820', input: '#38192c', ring: '#e1cc3b',
      midground: '#e1cc3b', midgroundForeground: '#000000', composerRing: '#e1cc3b',
      destructive: '#f47d66', destructiveForeground: '#000000', sidebarBackground: '#38192c', sidebarBorder: '#944820',
      userBubble: '#731a43', userBubbleBorder: '#e1cc3b'
    },
    darkColors: null,
    terminal: {
      foreground: '#f5fcfa', cursor: '#e1cc3b', selectionBackground: '#731a43', black: '#250a12',
      red: '#f47d66', green: '#34bc80', yellow: '#d7a747', blue: '#ed49ea', magenta: '#3ad647', cyan: '#e1cc3b', white: '#f5fcfa',
      brightBlack: '#8cc5a0', brightRed: '#f47d66', brightGreen: '#34bc80', brightYellow: '#d7a747',
      brightBlue: '#ed49ea', brightMagenta: '#3ad647', brightCyan: '#e1cc3b', brightWhite: '#f5fcfa'
    },
    semantic: { ok: '#34bc80', warn: '#d7a747', error: '#f47d66', tool: '#ed49ea' },
    glass: { backgroundGlow: '#d2c807', tint: '#3e1e35', rim: '#944820', blurPx: 18, saturation: 1.07, surfaceOpacity: 0.41, strongOpacity: 0.75, rimOpacity: 0.26, glowOpacity: 0.11 }
  },
  {
    name: 'lg-quartz-jungle', label: "Quartz Jungle", description: "quartz jungle glass", mode: 'light',
    colors: {
      background: '#f3ecf8', foreground: '#121c0b', card: '#d1a7dc', cardForeground: '#121c0b',
      muted: '#ddc0e6', mutedForeground: '#49581a', popover: '#d1a7dc', popoverForeground: '#121c0b',
      primary: '#118604', primaryForeground: '#ffffff', secondary: '#b38ed4', secondaryForeground: '#000000',
      accent: '#7a3d1f', accentForeground: '#ffffff', border: '#6b0e2d', input: '#d1a7dc', ring: '#2b057a',
      midground: '#2b057a', midgroundForeground: '#ffffff', composerRing: '#2b057a',
      destructive: '#792215', destructiveForeground: '#ffffff', sidebarBackground: '#d1a7dc', sidebarBorder: '#6b0e2d',
      userBubble: '#b38ed4', userBubbleBorder: '#2b057a'
    },
    darkColors: null,
    terminal: {
      foreground: '#121c0b', cursor: '#2b057a', selectionBackground: '#b38ed4', black: '#f3ecf8',
      red: '#792215', green: '#0d645b', yellow: '#6e4a0c', blue: '#7a3d1f', magenta: '#118604', cyan: '#2b057a', white: '#121c0b',
      brightBlack: '#49581a', brightRed: '#792215', brightGreen: '#0d645b', brightYellow: '#6e4a0c',
      brightBlue: '#7a3d1f', brightMagenta: '#118604', brightCyan: '#2b057a', brightWhite: '#121c0b'
    },
    semantic: { ok: '#0d645b', warn: '#6e4a0c', error: '#792215', tool: '#7a3d1f' },
    glass: { backgroundGlow: '#b72c4b', tint: '#cb9cd7', rim: '#6b0e2d', blurPx: 22, saturation: 1.2, surfaceOpacity: 0.48, strongOpacity: 0.86, rimOpacity: 0.35, glowOpacity: 0.16 }
  },
  {
    name: 'lg-sepia-comet', label: "Sepia Comet", description: "sepia comet glass", mode: 'dark',
    colors: {
      background: '#0b030b', foreground: '#d9f2d9', card: '#25122d', cardForeground: '#d9f2d9',
      muted: '#1e0e24', mutedForeground: '#b4cea8', popover: '#25122d', popoverForeground: '#d9f2d9',
      primary: '#f8ea51', primaryForeground: '#000000', secondary: '#6c2a66', secondaryForeground: '#ffffff',
      accent: '#d99348', accentForeground: '#000000', border: '#20e4cc', input: '#25122d', ring: '#d81b6d',
      midground: '#d81b6d', midgroundForeground: '#ffffff', composerRing: '#d81b6d',
      destructive: '#d44a41', destructiveForeground: '#000000', sidebarBackground: '#25122d', sidebarBorder: '#20e4cc',
      userBubble: '#6c2a66', userBubbleBorder: '#d81b6d'
    },
    darkColors: null,
    terminal: {
      foreground: '#d9f2d9', cursor: '#d81b6d', selectionBackground: '#6c2a66', black: '#0b030b',
      red: '#d44a41', green: '#35d571', yellow: '#e6c42d', blue: '#d99348', magenta: '#f8ea51', cyan: '#d81b6d', white: '#d9f2d9',
      brightBlack: '#b4cea8', brightRed: '#d44a41', brightGreen: '#35d571', brightYellow: '#e6c42d',
      brightBlue: '#d99348', brightMagenta: '#f8ea51', brightCyan: '#d81b6d', brightWhite: '#d9f2d9'
    },
    semantic: { ok: '#35d571', warn: '#e6c42d', error: '#d44a41', tool: '#d99348' },
    glass: { backgroundGlow: '#056ed3', tint: '#2d1738', rim: '#20e4cc', blurPx: 26, saturation: 1.33, surfaceOpacity: 0.55, strongOpacity: 0.76, rimOpacity: 0.44, glowOpacity: 0.21 }
  },
  {
    name: 'lg-marine-saffron', label: "Marine Saffron", description: "marine saffron glass", mode: 'light',
    colors: {
      background: '#f8d2db', foreground: '#0a211b', card: '#da9daf', cardForeground: '#0a211b',
      muted: '#e5b0bf', mutedForeground: '#345d45', popover: '#da9daf', popoverForeground: '#0a211b',
      primary: '#030b79', primaryForeground: '#ffffff', secondary: '#c06271', secondaryForeground: '#000000',
      accent: '#125c38', accentForeground: '#ffffff', border: '#418ba2', input: '#da9daf', ring: '#805d12',
      midground: '#805d12', midgroundForeground: '#ffffff', composerRing: '#805d12',
      destructive: '#732013', destructiveForeground: '#ffffff', sidebarBackground: '#da9daf', sidebarBorder: '#418ba2',
      userBubble: '#c06271', userBubbleBorder: '#805d12'
    },
    darkColors: null,
    terminal: {
      foreground: '#0a211b', cursor: '#805d12', selectionBackground: '#c06271', black: '#f8d2db',
      red: '#732013', green: '#21784b', yellow: '#7d440b', blue: '#125c38', magenta: '#030b79', cyan: '#805d12', white: '#0a211b',
      brightBlack: '#345d45', brightRed: '#732013', brightGreen: '#21784b', brightYellow: '#7d440b',
      brightBlue: '#125c38', brightMagenta: '#030b79', brightCyan: '#805d12', brightWhite: '#0a211b'
    },
    semantic: { ok: '#21784b', warn: '#7d440b', error: '#732013', tool: '#125c38' },
    glass: { backgroundGlow: '#326bcc', tint: '#d695a8', rim: '#418ba2', blurPx: 30, saturation: 1.46, surfaceOpacity: 0.34, strongOpacity: 0.87, rimOpacity: 0.22, glowOpacity: 0.26 }
  },
  {
    name: 'lg-charcoal-blossom', label: "Charcoal Blossom", description: "charcoal blossom glass", mode: 'dark',
    colors: {
      background: '#060904', foreground: '#f6edfc', card: '#212e11', cardForeground: '#f6edfc',
      muted: '#19230d', mutedForeground: '#b1a7c8', popover: '#212e11', popoverForeground: '#f6edfc',
      primary: '#5f45f8', primaryForeground: '#ffffff', secondary: '#326923', secondaryForeground: '#ffffff',
      accent: '#6be9bc', accentForeground: '#000000', border: '#32dfe3', input: '#212e11', ring: '#62f016',
      midground: '#62f016', midgroundForeground: '#000000', composerRing: '#62f016',
      destructive: '#dc4840', destructiveForeground: '#000000', sidebarBackground: '#212e11', sidebarBorder: '#32dfe3',
      userBubble: '#326923', userBubbleBorder: '#62f016'
    },
    darkColors: null,
    terminal: {
      foreground: '#f6edfc', cursor: '#62f016', selectionBackground: '#326923', black: '#060904',
      red: '#dc4840', green: '#4ac37f', yellow: '#f0b148', blue: '#6be9bc', magenta: '#5f45f8', cyan: '#62f016', white: '#f6edfc',
      brightBlack: '#b1a7c8', brightRed: '#dc4840', brightGreen: '#4ac37f', brightYellow: '#f0b148',
      brightBlue: '#6be9bc', brightMagenta: '#5f45f8', brightCyan: '#62f016', brightWhite: '#f6edfc'
    },
    semantic: { ok: '#4ac37f', warn: '#f0b148', error: '#dc4840', tool: '#6be9bc' },
    glass: { backgroundGlow: '#275bb4', tint: '#293915', rim: '#32dfe3', blurPx: 12, saturation: 1.16, surfaceOpacity: 0.41, strongOpacity: 0.77, rimOpacity: 0.31, glowOpacity: 0.31 }
  },
  {
    name: 'lg-lavender-alloy', label: "Lavender Alloy", description: "lavender alloy glass", mode: 'light',
    colors: {
      background: '#f0e6fe', foreground: '#11160a', card: '#cac5e4', cardForeground: '#11160a',
      muted: '#d8d2ee', mutedForeground: '#545732', popover: '#cac5e4', popoverForeground: '#11160a',
      primary: '#2f790a', primaryForeground: '#ffffff', secondary: '#958cc2', secondaryForeground: '#000000',
      accent: '#39036c', accentForeground: '#ffffff', border: '#2997a8', input: '#cac5e4', ring: '#540315',
      midground: '#540315', midgroundForeground: '#ffffff', composerRing: '#540315',
      destructive: '#700413', destructiveForeground: '#ffffff', sidebarBackground: '#cac5e4', sidebarBorder: '#2997a8',
      userBubble: '#958cc2', userBubbleBorder: '#540315'
    },
    darkColors: null,
    terminal: {
      foreground: '#11160a', cursor: '#540315', selectionBackground: '#958cc2', black: '#f0e6fe',
      red: '#700413', green: '#045d30', yellow: '#7e5213', blue: '#39036c', magenta: '#2f790a', cyan: '#540315', white: '#11160a',
      brightBlack: '#545732', brightRed: '#700413', brightGreen: '#045d30', brightYellow: '#7e5213',
      brightBlue: '#39036c', brightMagenta: '#2f790a', brightCyan: '#540315', brightWhite: '#11160a'
    },
    semantic: { ok: '#045d30', warn: '#7e5213', error: '#700413', tool: '#39036c' },
    glass: { backgroundGlow: '#3959ca', tint: '#c5c1e1', rim: '#2997a8', blurPx: 16, saturation: 1.29, surfaceOpacity: 0.48, strongOpacity: 0.88, rimOpacity: 0.4, glowOpacity: 0.36 }
  },
  {
    name: 'lg-scarlet-ice', label: "Scarlet Ice", description: "scarlet ice glass", mode: 'dark',
    colors: {
      background: '#1f2005', foreground: '#e7e7f4', card: '#4b450e', cardForeground: '#e7e7f4',
      muted: '#3e3a0c', mutedForeground: '#8797bc', popover: '#4b450e', popoverForeground: '#e7e7f4',
      primary: '#9523f3', primaryForeground: '#ffffff', secondary: '#686915', secondaryForeground: '#ffffff',
      accent: '#e0b14f', accentForeground: '#000000', border: '#e14b41', input: '#4b450e', ring: '#10f714',
      midground: '#10f714', midgroundForeground: '#000000', composerRing: '#10f714',
      destructive: '#d95547', destructiveForeground: '#000000', sidebarBackground: '#4b450e', sidebarBorder: '#e14b41',
      userBubble: '#686915', userBubbleBorder: '#10f714'
    },
    darkColors: null,
    terminal: {
      foreground: '#e7e7f4', cursor: '#10f714', selectionBackground: '#686915', black: '#1f2005',
      red: '#d95547', green: '#5ae7d0', yellow: '#d5d569', blue: '#e0b14f', magenta: '#9523f3', cyan: '#10f714', white: '#e7e7f4',
      brightBlack: '#8797bc', brightRed: '#d95547', brightGreen: '#5ae7d0', brightYellow: '#d5d569',
      brightBlue: '#e0b14f', brightMagenta: '#9523f3', brightCyan: '#10f714', brightWhite: '#e7e7f4'
    },
    semantic: { ok: '#5ae7d0', warn: '#d5d569', error: '#d95547', tool: '#e0b14f' },
    glass: { backgroundGlow: '#8a220f', tint: '#574f11', rim: '#e14b41', blurPx: 20, saturation: 1.42, surfaceOpacity: 0.55, strongOpacity: 0.78, rimOpacity: 0.49, glowOpacity: 0.13 }
  },
  {
    name: 'lg-teal-champagne', label: "Teal Champagne", description: "teal champagne glass", mode: 'light',
    colors: {
      background: '#ded6f6', foreground: '#111507', card: '#b4addc', cardForeground: '#111507',
      muted: '#c4bde6', mutedForeground: '#555015', popover: '#b4addc', popoverForeground: '#111507',
      primary: '#035b0e', primaryForeground: '#ffffff', secondary: '#afa2e5', secondaryForeground: '#000000',
      accent: '#246582', accentForeground: '#ffffff', border: '#0f2477', input: '#b4addc', ring: '#290356',
      midground: '#290356', midgroundForeground: '#ffffff', composerRing: '#290356',
      destructive: '#671907', destructiveForeground: '#ffffff', sidebarBackground: '#b4addc', sidebarBorder: '#0f2477',
      userBubble: '#afa2e5', userBubbleBorder: '#290356'
    },
    darkColors: null,
    terminal: {
      foreground: '#111507', cursor: '#290356', selectionBackground: '#afa2e5', black: '#ded6f6',
      red: '#671907', green: '#146825', yellow: '#644011', blue: '#246582', magenta: '#035b0e', cyan: '#290356', white: '#111507',
      brightBlack: '#555015', brightRed: '#671907', brightGreen: '#146825', brightYellow: '#644011',
      brightBlue: '#246582', brightMagenta: '#035b0e', brightCyan: '#290356', brightWhite: '#111507'
    },
    semantic: { ok: '#146825', warn: '#644011', error: '#671907', tool: '#246582' },
    glass: { backgroundGlow: '#398fb4', tint: '#afa8d9', rim: '#0f2477', blurPx: 24, saturation: 1.12, surfaceOpacity: 0.34, strongOpacity: 0.89, rimOpacity: 0.27, glowOpacity: 0.18 }
  },
  {
    name: 'lg-umber-laser', label: "Umber Laser", description: "umber laser glass", mode: 'dark',
    colors: {
      background: '#17021b', foreground: '#e5fbe0', card: '#390f46', cardForeground: '#e5fbe0',
      muted: '#2f0b39', mutedForeground: '#a4b493', popover: '#390f46', popoverForeground: '#e5fbe0',
      primary: '#2ae123', primaryForeground: '#000000', secondary: '#410b53', secondaryForeground: '#ffffff',
      accent: '#9124ea', accentForeground: '#ffffff', border: '#14e161', input: '#390f46', ring: '#de7e47',
      midground: '#de7e47', midgroundForeground: '#000000', composerRing: '#de7e47',
      destructive: '#cd5222', destructiveForeground: '#000000', sidebarBackground: '#390f46', sidebarBorder: '#14e161',
      userBubble: '#410b53', userBubbleBorder: '#de7e47'
    },
    darkColors: null,
    terminal: {
      foreground: '#e5fbe0', cursor: '#de7e47', selectionBackground: '#410b53', black: '#17021b',
      red: '#cd5222', green: '#58e6b9', yellow: '#cdaf4e', blue: '#9124ea', magenta: '#2ae123', cyan: '#de7e47', white: '#e5fbe0',
      brightBlack: '#a4b493', brightRed: '#cd5222', brightGreen: '#58e6b9', brightYellow: '#cdaf4e',
      brightBlue: '#9124ea', brightMagenta: '#2ae123', brightCyan: '#de7e47', brightWhite: '#e5fbe0'
    },
    semantic: { ok: '#58e6b9', warn: '#cdaf4e', error: '#cd5222', tool: '#9124ea' },
    glass: { backgroundGlow: '#26d1db', tint: '#421252', rim: '#14e161', blurPx: 28, saturation: 1.25, surfaceOpacity: 0.41, strongOpacity: 0.79, rimOpacity: 0.36, glowOpacity: 0.23 }
  },
  {
    name: 'lg-fuchsia-stone', label: "Fuchsia Stone", description: "fuchsia stone glass", mode: 'light',
    colors: {
      background: '#fdfadf', foreground: '#0b0d1e', card: '#e1c89f', cardForeground: '#0b0d1e',
      muted: '#ecdcb8', mutedForeground: '#334661', popover: '#e1c89f', popoverForeground: '#0b0d1e',
      primary: '#091466', primaryForeground: '#ffffff', secondary: '#c7c79e', secondaryForeground: '#000000',
      accent: '#570c76', accentForeground: '#ffffff', border: '#98338d', input: '#e1c89f', ring: '#7a0e28',
      midground: '#7a0e28', midgroundForeground: '#ffffff', composerRing: '#7a0e28',
      destructive: '#6d1514', destructiveForeground: '#ffffff', sidebarBackground: '#e1c89f', sidebarBorder: '#98338d',
      userBubble: '#c7c79e', userBubbleBorder: '#7a0e28'
    },
    darkColors: null,
    terminal: {
      foreground: '#0b0d1e', cursor: '#7a0e28', selectionBackground: '#c7c79e', black: '#fdfadf',
      red: '#6d1514', green: '#0f5e39', yellow: '#724608', blue: '#570c76', magenta: '#091466', cyan: '#7a0e28', white: '#0b0d1e',
      brightBlack: '#334661', brightRed: '#6d1514', brightGreen: '#0f5e39', brightYellow: '#724608',
      brightBlue: '#570c76', brightMagenta: '#091466', brightCyan: '#7a0e28', brightWhite: '#0b0d1e'
    },
    semantic: { ok: '#0f5e39', warn: '#724608', error: '#6d1514', tool: '#570c76' },
    glass: { backgroundGlow: '#c63be0', tint: '#dec398', rim: '#98338d', blurPx: 32, saturation: 1.38, surfaceOpacity: 0.48, strongOpacity: 0.9, rimOpacity: 0.45, glowOpacity: 0.28 }
  },
  {
    name: 'lg-navy-nectar', label: "Navy Nectar", description: "navy nectar glass", mode: 'dark',
    colors: {
      background: '#021107', foreground: '#f3ddec', card: '#17371c', cardForeground: '#f3ddec',
      muted: '#102b15', mutedForeground: '#b79ab7', popover: '#17371c', popoverForeground: '#f3ddec',
      primary: '#e33932', primaryForeground: '#000000', secondary: '#175321', secondaryForeground: '#ffffff',
      accent: '#c94b55', accentForeground: '#000000', border: '#9c6716', input: '#17371c', ring: '#c727e7',
      midground: '#c727e7', midgroundForeground: '#000000', composerRing: '#c727e7',
      destructive: '#e36c75', destructiveForeground: '#000000', sidebarBackground: '#17371c', sidebarBorder: '#9c6716',
      userBubble: '#175321', userBubbleBorder: '#c727e7'
    },
    darkColors: null,
    terminal: {
      foreground: '#f3ddec', cursor: '#c727e7', selectionBackground: '#175321', black: '#021107',
      red: '#e36c75', green: '#58ebc2', yellow: '#cac648', blue: '#c94b55', magenta: '#e33932', cyan: '#c727e7', white: '#f3ddec',
      brightBlack: '#b79ab7', brightRed: '#e36c75', brightGreen: '#58ebc2', brightYellow: '#cac648',
      brightBlue: '#c94b55', brightMagenta: '#e33932', brightCyan: '#c727e7', brightWhite: '#f3ddec'
    },
    semantic: { ok: '#58ebc2', warn: '#cac648', error: '#e36c75', tool: '#c94b55' },
    glass: { backgroundGlow: '#cbd706', tint: '#1c4021', rim: '#9c6716', blurPx: 14, saturation: 1.08, surfaceOpacity: 0.55, strongOpacity: 0.8, rimOpacity: 0.23, glowOpacity: 0.33 }
  },
  {
    name: 'lg-lime-shadow', label: "Lime Shadow", description: "lime shadow glass", mode: 'light',
    colors: {
      background: '#e2e3fe', foreground: '#151505', card: '#b4b2e7', cardForeground: '#151505',
      muted: '#bebcec', mutedForeground: '#483517', popover: '#b4b2e7', popoverForeground: '#151505',
      primary: '#575a14', primaryForeground: '#ffffff', secondary: '#9592cf', secondaryForeground: '#000000',
      accent: '#5f2104', accentForeground: '#ffffff', border: '#190d67', input: '#b4b2e7', ring: '#047f2f',
      midground: '#047f2f', midgroundForeground: '#ffffff', composerRing: '#047f2f',
      destructive: '#6a1818', destructiveForeground: '#ffffff', sidebarBackground: '#b4b2e7', sidebarBorder: '#190d67',
      userBubble: '#9592cf', userBubbleBorder: '#047f2f'
    },
    darkColors: null,
    terminal: {
      foreground: '#151505', cursor: '#047f2f', selectionBackground: '#9592cf', black: '#e2e3fe',
      red: '#6a1818', green: '#0a6b3a', yellow: '#6d4814', blue: '#5f2104', magenta: '#575a14', cyan: '#047f2f', white: '#151505',
      brightBlack: '#483517', brightRed: '#6a1818', brightGreen: '#0a6b3a', brightYellow: '#6d4814',
      brightBlue: '#5f2104', brightMagenta: '#575a14', brightCyan: '#047f2f', brightWhite: '#151505'
    },
    semantic: { ok: '#0a6b3a', warn: '#6d4814', error: '#6a1818', tool: '#5f2104' },
    glass: { backgroundGlow: '#7d3ed2', tint: '#a09ddd', rim: '#190d67', blurPx: 18, saturation: 1.21, surfaceOpacity: 0.34, strongOpacity: 0.7, rimOpacity: 0.32, glowOpacity: 0.1 }
  },
  {
    name: 'lg-rose-graphene', label: "Rose Graphene", description: "rose graphene glass", mode: 'dark',
    colors: {
      background: '#0d020e', foreground: '#ebf1eb', card: '#350c49', cardForeground: '#ebf1eb',
      muted: '#280936', mutedForeground: '#bacdab', popover: '#350c49', popoverForeground: '#ebf1eb',
      primary: '#4fd742', primaryForeground: '#000000', secondary: '#5f2a69', secondaryForeground: '#ffffff',
      accent: '#6ef178', accentForeground: '#000000', border: '#2050a4', input: '#350c49', ring: '#435eda',
      midground: '#435eda', midgroundForeground: '#ffffff', composerRing: '#435eda',
      destructive: '#cb6265', destructiveForeground: '#000000', sidebarBackground: '#350c49', sidebarBorder: '#2050a4',
      userBubble: '#5f2a69', userBubbleBorder: '#435eda'
    },
    darkColors: null,
    terminal: {
      foreground: '#ebf1eb', cursor: '#435eda', selectionBackground: '#5f2a69', black: '#0d020e',
      red: '#cb6265', green: '#49cf88', yellow: '#d1b155', blue: '#6ef178', magenta: '#4fd742', cyan: '#435eda', white: '#ebf1eb',
      brightBlack: '#bacdab', brightRed: '#cb6265', brightGreen: '#49cf88', brightYellow: '#d1b155',
      brightBlue: '#6ef178', brightMagenta: '#4fd742', brightCyan: '#435eda', brightWhite: '#ebf1eb'
    },
    semantic: { ok: '#49cf88', warn: '#d1b155', error: '#cb6265', tool: '#6ef178' },
    glass: { backgroundGlow: '#1bd3e0', tint: '#3e0e57', rim: '#2050a4', blurPx: 22, saturation: 1.34, surfaceOpacity: 0.41, strongOpacity: 0.81, rimOpacity: 0.41, glowOpacity: 0.15 }
  },
  {
    name: 'lg-ochre-orbit', label: "Ochre Orbit", description: "ochre orbit glass", mode: 'light',
    colors: {
      background: '#e2d9fd', foreground: '#121605', card: '#b9a6e3', cardForeground: '#121605',
      muted: '#c2b1e9', mutedForeground: '#625e31', popover: '#b9a6e3', popoverForeground: '#121605',
      primary: '#7b4005', primaryForeground: '#ffffff', secondary: '#8661c7', secondaryForeground: '#ffffff',
      accent: '#055757', accentForeground: '#ffffff', border: '#296474', input: '#b9a6e3', ring: '#761281',
      midground: '#761281', midgroundForeground: '#ffffff', composerRing: '#761281',
      destructive: '#842011', destructiveForeground: '#ffffff', sidebarBackground: '#b9a6e3', sidebarBorder: '#296474',
      userBubble: '#8661c7', userBubbleBorder: '#761281'
    },
    darkColors: null,
    terminal: {
      foreground: '#121605', cursor: '#761281', selectionBackground: '#8661c7', black: '#e2d9fd',
      red: '#842011', green: '#156b3e', yellow: '#62530d', blue: '#055757', magenta: '#7b4005', cyan: '#761281', white: '#121605',
      brightBlack: '#625e31', brightRed: '#842011', brightGreen: '#156b3e', brightYellow: '#62530d',
      brightBlue: '#055757', brightMagenta: '#7b4005', brightCyan: '#761281', brightWhite: '#121605'
    },
    semantic: { ok: '#156b3e', warn: '#62530d', error: '#842011', tool: '#055757' },
    glass: { backgroundGlow: '#466dcc', tint: '#a891d9', rim: '#296474', blurPx: 26, saturation: 1.04, surfaceOpacity: 0.48, strongOpacity: 0.71, rimOpacity: 0.5, glowOpacity: 0.2 }
  },
  {
    name: 'lg-aqua-mahogany', label: "Aqua Mahogany", description: "aqua mahogany glass", mode: 'dark',
    colors: {
      background: '#031608', foreground: '#f6e6f2', card: '#0f5411', cardForeground: '#f6e6f2',
      muted: '#0b400e', mutedForeground: '#c1a1c3', popover: '#0f5411', popoverForeground: '#f6e6f2',
      primary: '#e51d82', primaryForeground: '#000000', secondary: '#146411', secondaryForeground: '#ffffff',
      accent: '#63e8f2', accentForeground: '#000000', border: '#9a1f1e', input: '#0f5411', ring: '#6d3df0',
      midground: '#6d3df0', midgroundForeground: '#ffffff', composerRing: '#6d3df0',
      destructive: '#d82c2e', destructiveForeground: '#ffffff', sidebarBackground: '#0f5411', sidebarBorder: '#9a1f1e',
      userBubble: '#146411', userBubbleBorder: '#6d3df0'
    },
    darkColors: null,
    terminal: {
      foreground: '#f6e6f2', cursor: '#6d3df0', selectionBackground: '#146411', black: '#031608',
      red: '#d82c2e', green: '#65dbc1', yellow: '#f2c44e', blue: '#63e8f2', magenta: '#e51d82', cyan: '#6d3df0', white: '#f6e6f2',
      brightBlack: '#c1a1c3', brightRed: '#d82c2e', brightGreen: '#65dbc1', brightYellow: '#f2c44e',
      brightBlue: '#63e8f2', brightMagenta: '#e51d82', brightCyan: '#6d3df0', brightWhite: '#f6e6f2'
    },
    semantic: { ok: '#65dbc1', warn: '#f2c44e', error: '#d82c2e', tool: '#63e8f2' },
    glass: { backgroundGlow: '#da3f10', tint: '#126213', rim: '#9a1f1e', blurPx: 30, saturation: 1.17, surfaceOpacity: 0.55, strongOpacity: 0.82, rimOpacity: 0.28, glowOpacity: 0.25 }
  },
  {
    name: 'lg-plum-daybreak', label: "Plum Daybreak", description: "plum daybreak glass", mode: 'light',
    colors: {
      background: '#cecffa', foreground: '#2b2b13', card: '#aea6e9', cardForeground: '#2b2b13',
      muted: '#b5b0ed', mutedForeground: '#514121', popover: '#aea6e9', popoverForeground: '#2b2b13',
      primary: '#6f0c24', primaryForeground: '#ffffff', secondary: '#7d83d3', secondaryForeground: '#000000',
      accent: '#630519', accentForeground: '#ffffff', border: '#aa6744', input: '#aea6e9', ring: '#200673',
      midground: '#200673', midgroundForeground: '#ffffff', composerRing: '#200673',
      destructive: '#711724', destructiveForeground: '#ffffff', sidebarBackground: '#aea6e9', sidebarBorder: '#aa6744',
      userBubble: '#7d83d3', userBubbleBorder: '#200673'
    },
    darkColors: null,
    terminal: {
      foreground: '#2b2b13', cursor: '#200673', selectionBackground: '#7d83d3', black: '#cecffa',
      red: '#711724', green: '#0b581e', yellow: '#785616', blue: '#630519', magenta: '#6f0c24', cyan: '#200673', white: '#2b2b13',
      brightBlack: '#514121', brightRed: '#711724', brightGreen: '#0b581e', brightYellow: '#785616',
      brightBlue: '#630519', brightMagenta: '#6f0c24', brightCyan: '#200673', brightWhite: '#2b2b13'
    },
    semantic: { ok: '#0b581e', warn: '#785616', error: '#711724', tool: '#630519' },
    glass: { backgroundGlow: '#b44e46', tint: '#a196e2', rim: '#aa6744', blurPx: 12, saturation: 1.3, surfaceOpacity: 0.34, strongOpacity: 0.72, rimOpacity: 0.37, glowOpacity: 0.3 }
  },
  {
    name: 'lg-crimson-pearl', label: "Crimson Pearl", description: "crimson pearl glass", mode: 'dark',
    colors: {
      background: '#0c1b0f', foreground: '#f3e9f1', card: '#1c4431', cardForeground: '#f3e9f1',
      muted: '#163626', mutedForeground: '#cca6d0', popover: '#1c4431', popoverForeground: '#f3e9f1',
      primary: '#e8332e', primaryForeground: '#000000', secondary: '#2a5d37', secondaryForeground: '#ffffff',
      accent: '#58cdcd', accentForeground: '#000000', border: '#291196', input: '#1c4431', ring: '#1061ec',
      midground: '#1061ec', midgroundForeground: '#ffffff', composerRing: '#1061ec',
      destructive: '#e25634', destructiveForeground: '#000000', sidebarBackground: '#1c4431', sidebarBorder: '#291196',
      userBubble: '#2a5d37', userBubbleBorder: '#1061ec'
    },
    darkColors: null,
    terminal: {
      foreground: '#f3e9f1', cursor: '#1061ec', selectionBackground: '#2a5d37', black: '#0c1b0f',
      red: '#e25634', green: '#65e7ad', yellow: '#e1e059', blue: '#58cdcd', magenta: '#e8332e', cyan: '#1061ec', white: '#f3e9f1',
      brightBlack: '#cca6d0', brightRed: '#e25634', brightGreen: '#65e7ad', brightYellow: '#e1e059',
      brightBlue: '#58cdcd', brightMagenta: '#e8332e', brightCyan: '#1061ec', brightWhite: '#f3e9f1'
    },
    semantic: { ok: '#65e7ad', warn: '#e1e059', error: '#e25634', tool: '#58cdcd' },
    glass: { backgroundGlow: '#480cdf', tint: '#1f4d38', rim: '#291196', blurPx: 16, saturation: 1.43, surfaceOpacity: 0.41, strongOpacity: 0.83, rimOpacity: 0.46, glowOpacity: 0.35 }
  },
  {
    name: 'lg-steel-papaya', label: "Steel Papaya", description: "steel papaya glass", mode: 'light',
    colors: {
      background: '#dfe3fd', foreground: '#312c09', card: '#a5ace1', cardForeground: '#312c09',
      muted: '#b4b9e8', mutedForeground: '#5b4933', popover: '#a5ace1', popoverForeground: '#312c09',
      primary: '#5b4516', primaryForeground: '#ffffff', secondary: '#95a0e5', secondaryForeground: '#000000',
      accent: '#622f07', accentForeground: '#ffffff', border: '#246f3c', input: '#a5ace1', ring: '#69145a',
      midground: '#69145a', midgroundForeground: '#ffffff', composerRing: '#69145a',
      destructive: '#7b0f14', destructiveForeground: '#ffffff', sidebarBackground: '#a5ace1', sidebarBorder: '#246f3c',
      userBubble: '#95a0e5', userBubbleBorder: '#69145a'
    },
    darkColors: null,
    terminal: {
      foreground: '#312c09', cursor: '#69145a', selectionBackground: '#95a0e5', black: '#dfe3fd',
      red: '#7b0f14', green: '#096b2a', yellow: '#854506', blue: '#622f07', magenta: '#5b4516', cyan: '#69145a', white: '#312c09',
      brightBlack: '#5b4933', brightRed: '#7b0f14', brightGreen: '#096b2a', brightYellow: '#854506',
      brightBlue: '#622f07', brightMagenta: '#5b4516', brightCyan: '#69145a', brightWhite: '#312c09'
    },
    semantic: { ok: '#096b2a', warn: '#854506', error: '#7b0f14', tool: '#622f07' },
    glass: { backgroundGlow: '#3de53a', tint: '#9097d7', rim: '#246f3c', blurPx: 20, saturation: 1.13, surfaceOpacity: 0.48, strongOpacity: 0.73, rimOpacity: 0.24, glowOpacity: 0.12 }
  },
  {
    name: 'lg-forest-ultraviolet', label: "Forest Ultraviolet", description: "forest ultraviolet glass", mode: 'dark',
    colors: {
      background: '#0e0608', foreground: '#e4eae8', card: '#430f25', cardForeground: '#e4eae8',
      muted: '#310c1b', mutedForeground: '#93d0ac', popover: '#430f25', popoverForeground: '#e4eae8',
      primary: '#3c6fd7', primaryForeground: '#ffffff', secondary: '#712b30', secondaryForeground: '#ffffff',
      accent: '#dca717', accentForeground: '#000000', border: '#db611d', input: '#430f25', ring: '#1ade64',
      midground: '#1ade64', midgroundForeground: '#000000', composerRing: '#1ade64',
      destructive: '#d32138', destructiveForeground: '#ffffff', sidebarBackground: '#430f25', sidebarBorder: '#db611d',
      userBubble: '#712b30', userBubbleBorder: '#1ade64'
    },
    darkColors: null,
    terminal: {
      foreground: '#e4eae8', cursor: '#1ade64', selectionBackground: '#712b30', black: '#0e0608',
      red: '#d32138', green: '#7df29d', yellow: '#d6c64b', blue: '#dca717', magenta: '#3c6fd7', cyan: '#1ade64', white: '#e4eae8',
      brightBlack: '#93d0ac', brightRed: '#d32138', brightGreen: '#7df29d', brightYellow: '#d6c64b',
      brightBlue: '#dca717', brightMagenta: '#3c6fd7', brightCyan: '#1ade64', brightWhite: '#e4eae8'
    },
    semantic: { ok: '#7df29d', warn: '#d6c64b', error: '#d32138', tool: '#dca717' },
    glass: { backgroundGlow: '#b3b51f', tint: '#4d112a', rim: '#db611d', blurPx: 24, saturation: 1.26, surfaceOpacity: 0.55, strongOpacity: 0.84, rimOpacity: 0.33, glowOpacity: 0.17 }
  },
  {
    name: 'lg-peach-monsoon', label: "Peach Monsoon", description: "peach monsoon glass", mode: 'light',
    colors: {
      background: '#eed2f5', foreground: '#081205', card: '#d4a6e7', cardForeground: '#081205',
      muted: '#dbb2eb', mutedForeground: '#2d4610', popover: '#d4a6e7', popoverForeground: '#081205',
      primary: '#05591a', primaryForeground: '#ffffff', secondary: '#d68cdc', secondaryForeground: '#000000',
      accent: '#670430', accentForeground: '#ffffff', border: '#7a0a17', input: '#d4a6e7', ring: '#7b7216',
      midground: '#7b7216', midgroundForeground: '#ffffff', composerRing: '#7b7216',
      destructive: '#911c15', destructiveForeground: '#ffffff', sidebarBackground: '#d4a6e7', sidebarBorder: '#7a0a17',
      userBubble: '#d68cdc', userBubbleBorder: '#7b7216'
    },
    darkColors: null,
    terminal: {
      foreground: '#081205', cursor: '#7b7216', selectionBackground: '#d68cdc', black: '#eed2f5',
      red: '#911c15', green: '#12634c', yellow: '#784d12', blue: '#670430', magenta: '#05591a', cyan: '#7b7216', white: '#081205',
      brightBlack: '#2d4610', brightRed: '#911c15', brightGreen: '#12634c', brightYellow: '#784d12',
      brightBlue: '#670430', brightMagenta: '#05591a', brightCyan: '#7b7216', brightWhite: '#081205'
    },
    semantic: { ok: '#12634c', warn: '#784d12', error: '#911c15', tool: '#670430' },
    glass: { backgroundGlow: '#c931a4', tint: '#cb97e2', rim: '#7a0a17', blurPx: 28, saturation: 1.39, surfaceOpacity: 0.34, strongOpacity: 0.74, rimOpacity: 0.42, glowOpacity: 0.22 }
  },
  {
    name: 'lg-slate-citrus', label: "Slate Citrus", description: "slate citrus glass", mode: 'dark',
    colors: {
      background: '#10210a', foreground: '#e4d6e8', card: '#0d4012', cardForeground: '#e4d6e8',
      muted: '#0e3510', mutedForeground: '#af97d0', popover: '#0d4012', popoverForeground: '#e4d6e8',
      primary: '#1a5ff1', primaryForeground: '#ffffff', secondary: '#326d0c', secondaryForeground: '#ffffff',
      accent: '#dbdf44', accentForeground: '#000000', border: '#43259e', input: '#0d4012', ring: '#11d631',
      midground: '#11d631', midgroundForeground: '#000000', composerRing: '#11d631',
      destructive: '#ed7683', destructiveForeground: '#000000', sidebarBackground: '#0d4012', sidebarBorder: '#43259e',
      userBubble: '#326d0c', userBubbleBorder: '#11d631'
    },
    darkColors: null,
    terminal: {
      foreground: '#e4d6e8', cursor: '#11d631', selectionBackground: '#326d0c', black: '#10210a',
      red: '#ed7683', green: '#31c3a2', yellow: '#c7cb55', blue: '#dbdf44', magenta: '#1a5ff1', cyan: '#11d631', white: '#e4d6e8',
      brightBlack: '#af97d0', brightRed: '#ed7683', brightGreen: '#31c3a2', brightYellow: '#c7cb55',
      brightBlue: '#dbdf44', brightMagenta: '#1a5ff1', brightCyan: '#11d631', brightWhite: '#e4d6e8'
    },
    semantic: { ok: '#31c3a2', warn: '#c7cb55', error: '#ed7683', tool: '#dbdf44' },
    glass: { backgroundGlow: '#2352a2', tint: '#0c4614', rim: '#43259e', blurPx: 32, saturation: 1.09, surfaceOpacity: 0.41, strongOpacity: 0.85, rimOpacity: 0.2, glowOpacity: 0.27 }
  },
  {
    name: 'lg-magenta-glacier', label: "Magenta Glacier", description: "magenta glacier glass", mode: 'light',
    colors: {
      background: '#ddfee5', foreground: '#22121e', card: '#acebb4', cardForeground: '#22121e',
      muted: '#b9f0c1', mutedForeground: '#5c2762', popover: '#acebb4', popoverForeground: '#22121e',
      primary: '#310d65', primaryForeground: '#ffffff', secondary: '#8dc689', secondaryForeground: '#000000',
      accent: '#615f13', accentForeground: '#ffffff', border: '#397b94', input: '#acebb4', ring: '#5c1f0c',
      midground: '#5c1f0c', midgroundForeground: '#ffffff', composerRing: '#5c1f0c',
      destructive: '#8f1d1e', destructiveForeground: '#ffffff', sidebarBackground: '#acebb4', sidebarBorder: '#397b94',
      userBubble: '#8dc689', userBubbleBorder: '#5c1f0c'
    },
    darkColors: null,
    terminal: {
      foreground: '#22121e', cursor: '#5c1f0c', selectionBackground: '#8dc689', black: '#ddfee5',
      red: '#8f1d1e', green: '#066838', yellow: '#724717', blue: '#615f13', magenta: '#310d65', cyan: '#5c1f0c', white: '#22121e',
      brightBlack: '#5c2762', brightRed: '#8f1d1e', brightGreen: '#066838', brightYellow: '#724717',
      brightBlue: '#615f13', brightMagenta: '#310d65', brightCyan: '#5c1f0c', brightWhite: '#22121e'
    },
    semantic: { ok: '#066838', warn: '#724717', error: '#8f1d1e', tool: '#615f13' },
    glass: { backgroundGlow: '#363bd7', tint: '#9be5a4', rim: '#397b94', blurPx: 14, saturation: 1.22, surfaceOpacity: 0.48, strongOpacity: 0.75, rimOpacity: 0.29, glowOpacity: 0.32 }
  },
  {
    name: 'lg-olive-starlight', label: "Olive Starlight", description: "olive starlight glass", mode: 'dark',
    colors: {
      background: '#181506', foreground: '#ebecf3', card: '#584d26', cardForeground: '#ebecf3',
      muted: '#41391a', mutedForeground: '#b1bcc6', popover: '#584d26', popoverForeground: '#ebecf3',
      primary: '#d62ecc', primaryForeground: '#000000', secondary: '#716328', secondaryForeground: '#ffffff',
      accent: '#afe943', accentForeground: '#000000', border: '#992132', input: '#584d26', ring: '#d07d10',
      midground: '#d07d10', midgroundForeground: '#000000', composerRing: '#d07d10',
      destructive: '#c84f23', destructiveForeground: '#000000', sidebarBackground: '#584d26', sidebarBorder: '#992132',
      userBubble: '#716328', userBubbleBorder: '#d07d10'
    },
    darkColors: null,
    terminal: {
      foreground: '#ebecf3', cursor: '#d07d10', selectionBackground: '#716328', black: '#181506',
      red: '#c84f23', green: '#6ae7b8', yellow: '#cedc61', blue: '#afe943', magenta: '#d62ecc', cyan: '#d07d10', white: '#ebecf3',
      brightBlack: '#b1bcc6', brightRed: '#c84f23', brightGreen: '#6ae7b8', brightYellow: '#cedc61',
      brightBlue: '#afe943', brightMagenta: '#d62ecc', brightCyan: '#d07d10', brightWhite: '#ebecf3'
    },
    semantic: { ok: '#6ae7b8', warn: '#cedc61', error: '#c84f23', tool: '#afe943' },
    glass: { backgroundGlow: '#dc38bc', tint: '#63562b', rim: '#992132', blurPx: 18, saturation: 1.35, surfaceOpacity: 0.55, strongOpacity: 0.86, rimOpacity: 0.38, glowOpacity: 0.37 }
  },
  {
    name: 'lg-cerulean-clay', label: "Cerulean Clay", description: "cerulean clay glass", mode: 'light',
    colors: {
      background: '#fddbd2', foreground: '#111f23', card: '#e2b1af', cardForeground: '#111f23',
      muted: '#e9bdb9', mutedForeground: '#234743', popover: '#e2b1af', popoverForeground: '#111f23',
      primary: '#0d055d', primaryForeground: '#ffffff', secondary: '#daa8ae', secondaryForeground: '#000000',
      accent: '#863f0b', accentForeground: '#ffffff', border: '#3b730e', input: '#e2b1af', ring: '#35820f',
      midground: '#35820f', midgroundForeground: '#ffffff', composerRing: '#35820f',
      destructive: '#801907', destructiveForeground: '#ffffff', sidebarBackground: '#e2b1af', sidebarBorder: '#3b730e',
      userBubble: '#daa8ae', userBubbleBorder: '#35820f'
    },
    darkColors: null,
    terminal: {
      foreground: '#111f23', cursor: '#35820f', selectionBackground: '#daa8ae', black: '#fddbd2',
      red: '#801907', green: '#1c5d44', yellow: '#67460f', blue: '#863f0b', magenta: '#0d055d', cyan: '#35820f', white: '#111f23',
      brightBlack: '#234743', brightRed: '#801907', brightGreen: '#1c5d44', brightYellow: '#67460f',
      brightBlue: '#863f0b', brightMagenta: '#0d055d', brightCyan: '#35820f', brightWhite: '#111f23'
    },
    semantic: { ok: '#1c5d44', warn: '#67460f', error: '#801907', tool: '#863f0b' },
    glass: { backgroundGlow: '#a2c154', tint: '#d9a4a4', rim: '#3b730e', blurPx: 22, saturation: 1.05, surfaceOpacity: 0.34, strongOpacity: 0.76, rimOpacity: 0.47, glowOpacity: 0.14 }
  },
  {
    name: 'lg-cocoa-hologram', label: "Cocoa Hologram", description: "cocoa hologram glass", mode: 'dark',
    colors: {
      background: '#201307', foreground: '#d4e1ed', card: '#472f10', cardForeground: '#d4e1ed',
      muted: '#39250c', mutedForeground: '#aebcbf', popover: '#472f10', popoverForeground: '#d4e1ed',
      primary: '#a322f2', primaryForeground: '#ffffff', secondary: '#79613a', secondaryForeground: '#ffffff',
      accent: '#74d23d', accentForeground: '#000000', border: '#cd20c9', input: '#472f10', ring: '#37d8fa',
      midground: '#37d8fa', midgroundForeground: '#000000', composerRing: '#37d8fa',
      destructive: '#ec2d26', destructiveForeground: '#000000', sidebarBackground: '#472f10', sidebarBorder: '#cd20c9',
      userBubble: '#79613a', userBubbleBorder: '#37d8fa'
    },
    darkColors: null,
    terminal: {
      foreground: '#d4e1ed', cursor: '#37d8fa', selectionBackground: '#79613a', black: '#201307',
      red: '#ec2d26', green: '#56dfc0', yellow: '#eaf475', blue: '#74d23d', magenta: '#a322f2', cyan: '#37d8fa', white: '#d4e1ed',
      brightBlack: '#aebcbf', brightRed: '#ec2d26', brightGreen: '#56dfc0', brightYellow: '#eaf475',
      brightBlue: '#74d23d', brightMagenta: '#a322f2', brightCyan: '#37d8fa', brightWhite: '#d4e1ed'
    },
    semantic: { ok: '#56dfc0', warn: '#eaf475', error: '#ec2d26', tool: '#74d23d' },
    glass: { backgroundGlow: '#d909de', tint: '#4d3311', rim: '#cd20c9', blurPx: 26, saturation: 1.18, surfaceOpacity: 0.41, strongOpacity: 0.87, rimOpacity: 0.25, glowOpacity: 0.19 }
  },
  {
    name: 'lg-mint-volcano', label: "Mint Volcano", description: "mint volcano glass", mode: 'light',
    colors: {
      background: '#f7dcf7', foreground: '#071d06', card: '#e1b2f2', cardForeground: '#071d06',
      muted: '#e8bef4', mutedForeground: '#264814', popover: '#e1b2f2', popoverForeground: '#071d06',
      primary: '#098452', primaryForeground: '#ffffff', secondary: '#da80c2', secondaryForeground: '#000000',
      accent: '#0d5c41', accentForeground: '#ffffff', border: '#3a809a', input: '#e1b2f2', ring: '#5e7910',
      midground: '#5e7910', midgroundForeground: '#ffffff', composerRing: '#5e7910',
      destructive: '#8c1f04', destructiveForeground: '#ffffff', sidebarBackground: '#e1b2f2', sidebarBorder: '#3a809a',
      userBubble: '#da80c2', userBubbleBorder: '#5e7910'
    },
    darkColors: null,
    terminal: {
      foreground: '#071d06', cursor: '#5e7910', selectionBackground: '#da80c2', black: '#f7dcf7',
      red: '#8c1f04', green: '#125a31', yellow: '#6a5012', blue: '#0d5c41', magenta: '#098452', cyan: '#5e7910', white: '#071d06',
      brightBlack: '#264814', brightRed: '#8c1f04', brightGreen: '#125a31', brightYellow: '#6a5012',
      brightBlue: '#0d5c41', brightMagenta: '#098452', brightCyan: '#5e7910', brightWhite: '#071d06'
    },
    semantic: { ok: '#125a31', warn: '#6a5012', error: '#8c1f04', tool: '#0d5c41' },
    glass: { backgroundGlow: '#3142b4', tint: '#dba6f1', rim: '#3a809a', blurPx: 30, saturation: 1.31, surfaceOpacity: 0.48, strongOpacity: 0.77, rimOpacity: 0.34, glowOpacity: 0.24 }
  },
  {
    name: 'lg-amber-abyss', label: "Amber Abyss", description: "amber abyss glass", mode: 'dark',
    colors: {
      background: '#030903', foreground: '#f1e4ef', card: '#284d2e', cardForeground: '#f1e4ef',
      muted: '#1a331e', mutedForeground: '#d0bbd6', popover: '#284d2e', popoverForeground: '#f1e4ef',
      primary: '#db6443', primaryForeground: '#000000', secondary: '#2e7220', secondaryForeground: '#ffffff',
      accent: '#cfc644', accentForeground: '#000000', border: '#1b6896', input: '#284d2e', ring: '#22eb31',
      midground: '#22eb31', midgroundForeground: '#000000', composerRing: '#22eb31',
      destructive: '#e82424', destructiveForeground: '#000000', sidebarBackground: '#284d2e', sidebarBorder: '#1b6896',
      userBubble: '#2e7220', userBubbleBorder: '#22eb31'
    },
    darkColors: null,
    terminal: {
      foreground: '#f1e4ef', cursor: '#22eb31', selectionBackground: '#2e7220', black: '#030903',
      red: '#e82424', green: '#27cf4a', yellow: '#e9f270', blue: '#cfc644', magenta: '#db6443', cyan: '#22eb31', white: '#f1e4ef',
      brightBlack: '#d0bbd6', brightRed: '#e82424', brightGreen: '#27cf4a', brightYellow: '#e9f270',
      brightBlue: '#cfc644', brightMagenta: '#db6443', brightCyan: '#22eb31', brightWhite: '#f1e4ef'
    },
    semantic: { ok: '#27cf4a', warn: '#e9f270', error: '#e82424', tool: '#cfc644' },
    glass: { backgroundGlow: '#1edfcd', tint: '#2d5634', rim: '#1b6896', blurPx: 12, saturation: 1.44, surfaceOpacity: 0.55, strongOpacity: 0.88, rimOpacity: 0.43, glowOpacity: 0.29 }
  },
  {
    name: 'lg-lilac-circuit', label: "Lilac Circuit", description: "lilac circuit glass", mode: 'light',
    colors: {
      background: '#f9e2de', foreground: '#17272a', card: '#f3dbd5', cardForeground: '#17272a',
      muted: '#f5ddd8', mutedForeground: '#1b413b', popover: '#f3dbd5', popoverForeground: '#17272a',
      primary: '#0b596b', primaryForeground: '#ffffff', secondary: '#cc8269', secondaryForeground: '#000000',
      accent: '#604b0a', accentForeground: '#ffffff', border: '#260666', input: '#f3dbd5', ring: '#6c0c56',
      midground: '#6c0c56', midgroundForeground: '#ffffff', composerRing: '#6c0c56',
      destructive: '#7e1403', destructiveForeground: '#ffffff', sidebarBackground: '#f3dbd5', sidebarBorder: '#260666',
      userBubble: '#cc8269', userBubbleBorder: '#6c0c56'
    },
    darkColors: null,
    terminal: {
      foreground: '#17272a', cursor: '#6c0c56', selectionBackground: '#cc8269', black: '#f9e2de',
      red: '#7e1403', green: '#1a7d5b', yellow: '#68520b', blue: '#604b0a', magenta: '#0b596b', cyan: '#6c0c56', white: '#17272a',
      brightBlack: '#1b413b', brightRed: '#7e1403', brightGreen: '#1a7d5b', brightYellow: '#68520b',
      brightBlue: '#604b0a', brightMagenta: '#0b596b', brightCyan: '#6c0c56', brightWhite: '#17272a'
    },
    semantic: { ok: '#1a7d5b', warn: '#68520b', error: '#7e1403', tool: '#604b0a' },
    glass: { backgroundGlow: '#d36fd4', tint: '#f1d9d3', rim: '#260666', blurPx: 16, saturation: 1.14, surfaceOpacity: 0.34, strongOpacity: 0.78, rimOpacity: 0.21, glowOpacity: 0.34 }
  },
  {
    name: 'lg-velvet-fang', label: "Velvet Fang", description: "velvet fang liquid glass", mode: 'dark',
    colors: {
      background: '#292a39', foreground: '#f8f9f3', card: '#482e45', cardForeground: '#f8f9f3',
      muted: '#3e2d41', mutedForeground: '#bbbbc8', popover: '#482e45', popoverForeground: '#f8f9f3',
      primary: '#ff7db9', primaryForeground: '#000000', secondary: '#525370', secondaryForeground: '#ffffff',
      accent: '#636ba7', accentForeground: '#ffffff', border: '#8ddeff', input: '#482e45', ring: '#cb94fc',
      midground: '#cb94fc', midgroundForeground: '#000000', composerRing: '#cb94fc',
      destructive: '#ff6c59', destructiveForeground: '#000000', sidebarBackground: '#482e45', sidebarBorder: '#8ddeff',
      userBubble: '#525370', userBubbleBorder: '#cb94fc'
    },
    darkColors: null,
    terminal: {
      foreground: '#f8f9f3', cursor: '#cb94fc', selectionBackground: '#525370', black: '#292a39',
      red: '#ff6c59', green: '#4fff90', yellow: '#e7fd8d', blue: '#636ba7', magenta: '#ff7db9', cyan: '#cb94fc', white: '#f8f9f3',
      brightBlack: '#bbbbc8', brightRed: '#ff6c59', brightGreen: '#4fff90', brightYellow: '#e7fd8d',
      brightBlue: '#636ba7', brightMagenta: '#ff7db9', brightCyan: '#cb94fc', brightWhite: '#f8f9f3'
    },
    semantic: { ok: '#4fff90', warn: '#e7fd8d', error: '#ff6c59', tool: '#636ba7' },
    glass: { backgroundGlow: '#823e66', tint: '#4f2f48', rim: '#8ddeff', blurPx: 18, saturation: 1.26, surfaceOpacity: 0.43, strongOpacity: 0.82, rimOpacity: 0.47, glowOpacity: 0.33 }
  },
  {
    name: 'lg-mauve-meringue', label: "Mauve Meringue", description: "mauve meringue liquid glass", mode: 'dark',
    colors: {
      background: '#1d1f2c', foreground: '#ccd8f2', card: '#332d43', cardForeground: '#ccd8f2',
      muted: '#2e293e', mutedForeground: '#a5afc6', popover: '#332d43', popoverForeground: '#ccd8f2',
      primary: '#c2a5f5', primaryForeground: '#000000', secondary: '#575c6e', secondaryForeground: '#ffffff',
      accent: '#89bef7', accentForeground: '#000000', border: '#89e3e8', input: '#332d43', ring: '#f7a787',
      midground: '#f7a787', midgroundForeground: '#000000', composerRing: '#f7a787',
      destructive: '#f08bb1', destructiveForeground: '#000000', sidebarBackground: '#332d43', sidebarBorder: '#89e3e8',
      userBubble: '#575c6e', userBubbleBorder: '#f7a787'
    },
    darkColors: null,
    terminal: {
      foreground: '#ccd8f2', cursor: '#f7a787', selectionBackground: '#575c6e', black: '#1d1f2c',
      red: '#f08bb1', green: '#ace1a0', yellow: '#f7d9ae', blue: '#89bef7', magenta: '#c2a5f5', cyan: '#f7a787', white: '#ccd8f2',
      brightBlack: '#a5afc6', brightRed: '#f08bb1', brightGreen: '#ace1a0', brightYellow: '#f7d9ae',
      brightBlue: '#89bef7', brightMagenta: '#c2a5f5', brightCyan: '#f7a787', brightWhite: '#ccd8f2'
    },
    semantic: { ok: '#ace1a0', warn: '#f7d9ae', error: '#f08bb1', tool: '#89bef7' },
    glass: { backgroundGlow: '#574869', tint: '#3b324c', rim: '#89e3e8', blurPx: 22, saturation: 1.39, surfaceOpacity: 0.5, strongOpacity: 0.73, rimOpacity: 0.3, glowOpacity: 0.16 }
  },
  {
    name: 'lg-neon-shinjuku', label: "Neon Shinjuku", description: "neon shinjuku liquid glass", mode: 'dark',
    colors: {
      background: '#1b1b28', foreground: '#c2c7f7', card: '#122e65', cardForeground: '#c2c7f7',
      muted: '#152850', mutedForeground: '#aaafd8', popover: '#122e65', popoverForeground: '#c2c7f7',
      primary: '#7a99fa', primaryForeground: '#000000', secondary: '#354486', secondaryForeground: '#ffffff',
      accent: '#29b7e3', accentForeground: '#000000', border: '#c49bfa', input: '#122e65', ring: '#fa7684',
      midground: '#fa7684', midgroundForeground: '#000000', composerRing: '#fa7684',
      destructive: '#df574a', destructiveForeground: '#000000', sidebarBackground: '#122e65', sidebarBorder: '#c49bfa',
      userBubble: '#354486', userBubbleBorder: '#fa7684'
    },
    darkColors: null,
    terminal: {
      foreground: '#c2c7f7', cursor: '#fa7684', selectionBackground: '#354486', black: '#1b1b28',
      red: '#df574a', green: '#97d16a', yellow: '#e4bb68', blue: '#29b7e3', magenta: '#7a99fa', cyan: '#fa7684', white: '#c2c7f7',
      brightBlack: '#aaafd8', brightRed: '#df574a', brightGreen: '#97d16a', brightYellow: '#e4bb68',
      brightBlue: '#29b7e3', brightMagenta: '#7a99fa', brightCyan: '#fa7684', brightWhite: '#c2c7f7'
    },
    semantic: { ok: '#97d16a', warn: '#e4bb68', error: '#df574a', tool: '#29b7e3' },
    glass: { backgroundGlow: '#0f5ea1', tint: '#103271', rim: '#c49bfa', blurPx: 26, saturation: 1.15, surfaceOpacity: 0.57, strongOpacity: 0.84, rimOpacity: 0.39, glowOpacity: 0.21 }
  },
  {
    name: 'lg-ember-circuit', label: "Ember Circuit", description: "ember circuit liquid glass", mode: 'dark',
    colors: {
      background: '#272c32', foreground: '#aab3bd', card: '#3b3837', cardForeground: '#aab3bd',
      muted: '#363536', mutedForeground: '#9ca7b2', popover: '#3b3837', popoverForeground: '#aab3bd',
      primary: '#62c0ec', primaryForeground: '#000000', secondary: '#3e5568', secondaryForeground: '#ffffff',
      accent: '#b778da', accentForeground: '#000000', border: '#a0c179', input: '#3b3837', ring: '#ce8b66',
      midground: '#ce8b66', midgroundForeground: '#000000', composerRing: '#ce8b66',
      destructive: '#dd6c84', destructiveForeground: '#000000', sidebarBackground: '#3b3837', sidebarBorder: '#a0c179',
      userBubble: '#3e5568', userBubbleBorder: '#ce8b66'
    },
    darkColors: null,
    terminal: {
      foreground: '#aab3bd', cursor: '#ce8b66', selectionBackground: '#3e5568', black: '#272c32',
      red: '#dd6c84', green: '#56bfbd', yellow: '#e2b17b', blue: '#b778da', magenta: '#62c0ec', cyan: '#ce8b66', white: '#aab3bd',
      brightBlack: '#9ca7b2', brightRed: '#dd6c84', brightGreen: '#56bfbd', brightYellow: '#e2b17b',
      brightBlue: '#b778da', brightMagenta: '#62c0ec', brightCyan: '#ce8b66', brightWhite: '#aab3bd'
    },
    semantic: { ok: '#56bfbd', warn: '#e2b17b', error: '#dd6c84', tool: '#b778da' },
    glass: { backgroundGlow: '#584d47', tint: '#423c39', rim: '#a0c179', blurPx: 30, saturation: 1.28, surfaceOpacity: 0.39, strongOpacity: 0.75, rimOpacity: 0.22, glowOpacity: 0.26 }
  },
  {
    name: 'lg-forge-midnight', label: "Forge Midnight", description: "forge midnight liquid glass", mode: 'dark',
    colors: {
      background: '#0e1119', foreground: '#cad1db', card: '#161a22', cardForeground: '#cad1db',
      muted: '#13161f', mutedForeground: '#9ca6b6', popover: '#161a22', popoverForeground: '#cad1db',
      primary: '#5b97ff', primaryForeground: '#000000', secondary: '#24487d', secondaryForeground: '#ffffff',
      accent: '#b26ffc', accentForeground: '#000000', border: '#31363f', input: '#161a22', ring: '#fc77ae',
      midground: '#fc77ae', midgroundForeground: '#000000', composerRing: '#fc77ae',
      destructive: '#fe6146', destructiveForeground: '#000000', sidebarBackground: '#161a22', sidebarBorder: '#31363f',
      userBubble: '#24487d', userBubbleBorder: '#fc77ae'
    },
    darkColors: null,
    terminal: {
      foreground: '#cad1db', cursor: '#fc77ae', selectionBackground: '#24487d', black: '#0e1119',
      red: '#fe6146', green: '#3bc05b', yellow: '#dbb01c', blue: '#b26ffc', magenta: '#5b97ff', cyan: '#fc77ae', white: '#cad1db',
      brightBlack: '#9ca6b6', brightRed: '#fe6146', brightGreen: '#3bc05b', brightYellow: '#dbb01c',
      brightBlue: '#b26ffc', brightMagenta: '#5b97ff', brightCyan: '#fc77ae', brightWhite: '#cad1db'
    },
    semantic: { ok: '#3bc05b', warn: '#dbb01c', error: '#fe6146', tool: '#b26ffc' },
    glass: { backgroundGlow: '#1b5af2', tint: '#171b24', rim: '#31363f', blurPx: 14, saturation: 1.41, surfaceOpacity: 0.46, strongOpacity: 0.86, rimOpacity: 0.31, glowOpacity: 0.31 }
  },
  {
    name: 'lg-afterhours-azure', label: "Afterhours Azure", description: "afterhours azure liquid glass", mode: 'dark',
    colors: {
      background: '#021722', foreground: '#d4dee9', card: '#072e3b', cardForeground: '#d4dee9',
      muted: '#062834', mutedForeground: '#9eb5c5', popover: '#072e3b', popoverForeground: '#d4dee9',
      primary: '#82b3fb', primaryForeground: '#000000', secondary: '#1e3d4f', secondaryForeground: '#ffffff',
      accent: '#25bf96', accentForeground: '#000000', border: '#b4d768', input: '#072e3b', ring: '#fa5a82',
      midground: '#fa5a82', midgroundForeground: '#000000', composerRing: '#fa5a82',
      destructive: '#ea525b', destructiveForeground: '#000000', sidebarBackground: '#072e3b', sidebarBorder: '#b4d768',
      userBubble: '#1e3d4f', userBubbleBorder: '#fa5a82'
    },
    darkColors: null,
    terminal: {
      foreground: '#d4dee9', cursor: '#fa5a82', selectionBackground: '#1e3d4f', black: '#021722',
      red: '#ea525b', green: '#7fd7c0', yellow: '#e9ba8d', blue: '#25bf96', magenta: '#82b3fb', cyan: '#fa5a82', white: '#d4dee9',
      brightBlack: '#9eb5c5', brightRed: '#ea525b', brightGreen: '#7fd7c0', brightYellow: '#e9ba8d',
      brightBlue: '#25bf96', brightMagenta: '#82b3fb', brightCyan: '#fa5a82', brightWhite: '#d4dee9'
    },
    semantic: { ok: '#7fd7c0', warn: '#e9ba8d', error: '#ea525b', tool: '#25bf96' },
    glass: { backgroundGlow: '#095d5d', tint: '#093542', rim: '#b4d768', blurPx: 18, saturation: 1.17, surfaceOpacity: 0.53, strongOpacity: 0.77, rimOpacity: 0.4, glowOpacity: 0.14 }
  },
  {
    name: 'lg-frostline', label: "Frostline", description: "frostline liquid glass", mode: 'dark',
    colors: {
      background: '#2f3c43', foreground: '#eef4f6', card: '#3d5d5f', cardForeground: '#eef4f6',
      muted: '#385155', mutedForeground: '#c6d1d6', popover: '#3d5d5f', popoverForeground: '#eef4f6',
      primary: '#89d3cb', primaryForeground: '#000000', secondary: '#445761', secondaryForeground: '#ffffff',
      accent: '#5f9eaf', accentForeground: '#000000', border: '#baeae3', input: '#3d5d5f', ring: '#82b9c4',
      midground: '#82b9c4', midgroundForeground: '#000000', composerRing: '#82b9c4',
      destructive: '#c2628b', destructiveForeground: '#000000', sidebarBackground: '#3d5d5f', sidebarBorder: '#baeae3',
      userBubble: '#445761', userBubbleBorder: '#82b9c4'
    },
    darkColors: null,
    terminal: {
      foreground: '#eef4f6', cursor: '#82b9c4', selectionBackground: '#445761', black: '#2f3c43',
      red: '#c2628b', green: '#b6c18d', yellow: '#eead8c', blue: '#5f9eaf', magenta: '#89d3cb', cyan: '#82b9c4', white: '#eef4f6',
      brightBlack: '#c6d1d6', brightRed: '#c2628b', brightGreen: '#b6c18d', brightYellow: '#eead8c',
      brightBlue: '#5f9eaf', brightMagenta: '#89d3cb', brightCyan: '#82b9c4', brightWhite: '#eef4f6'
    },
    semantic: { ok: '#b6c18d', warn: '#eead8c', error: '#c2628b', tool: '#5f9eaf' },
    glass: { backgroundGlow: '#4c7f7d', tint: '#3f6263', rim: '#baeae3', blurPx: 22, saturation: 1.3, surfaceOpacity: 0.6, strongOpacity: 0.88, rimOpacity: 0.23, glowOpacity: 0.19 }
  },
  {
    name: 'lg-mossed-brass', label: "Mossed Brass", description: "mossed brass liquid glass", mode: 'dark',
    colors: {
      background: '#272626', foreground: '#d2b597', card: '#373932', cardForeground: '#d2b597',
      muted: '#32332e', mutedForeground: '#bba892', popover: '#373932', popoverForeground: '#d2b597',
      primary: '#d49558', primaryForeground: '#000000', secondary: '#4c4f44', secondaryForeground: '#ffffff',
      accent: '#88b7a1', accentForeground: '#000000', border: '#7cac9b', input: '#373932', ring: '#b0b365',
      midground: '#b0b365', midgroundForeground: '#000000', composerRing: '#b0b365',
      destructive: '#e6636b', destructiveForeground: '#000000', sidebarBackground: '#373932', sidebarBorder: '#7cac9b',
      userBubble: '#4c4f44', userBubbleBorder: '#b0b365'
    },
    darkColors: null,
    terminal: {
      foreground: '#d2b597', cursor: '#b0b365', selectionBackground: '#4c4f44', black: '#272626',
      red: '#e6636b', green: '#8eb281', yellow: '#df9550', blue: '#88b7a1', magenta: '#d49558', cyan: '#b0b365', white: '#d2b597',
      brightBlack: '#bba892', brightRed: '#e6636b', brightGreen: '#8eb281', brightYellow: '#df9550',
      brightBlue: '#88b7a1', brightMagenta: '#d49558', brightCyan: '#b0b365', brightWhite: '#d2b597'
    },
    semantic: { ok: '#8eb281', warn: '#df9550', error: '#e6636b', tool: '#88b7a1' },
    glass: { backgroundGlow: '#565e4a', tint: '#3b3e35', rim: '#7cac9b', blurPx: 26, saturation: 1.43, surfaceOpacity: 0.42, strongOpacity: 0.79, rimOpacity: 0.32, glowOpacity: 0.24 }
  },
  {
    name: 'lg-mirage-signal', label: "Mirage Signal", description: "mirage signal liquid glass", mode: 'dark',
    colors: {
      background: '#1f2432', foreground: '#cccdc7', card: '#242837', cardForeground: '#cccdc7',
      muted: '#222735', mutedForeground: '#a9aaa4', popover: '#242837', popoverForeground: '#cccdc7',
      primary: '#ffd769', primaryForeground: '#000000', secondary: '#34435d', secondaryForeground: '#ffffff',
      accent: '#5ac9ea', accentForeground: '#000000', border: '#ceff83', input: '#242837', ring: '#76c8ff',
      midground: '#76c8ff', midgroundForeground: '#000000', composerRing: '#76c8ff',
      destructive: '#f68f78', destructiveForeground: '#000000', sidebarBackground: '#242837', sidebarBorder: '#ceff83',
      userBubble: '#34435d', userBubbleBorder: '#76c8ff'
    },
    darkColors: null,
    terminal: {
      foreground: '#cccdc7', cursor: '#76c8ff', selectionBackground: '#34435d', black: '#1f2432',
      red: '#f68f78', green: '#b4e97d', yellow: '#ffde83', blue: '#5ac9ea', magenta: '#ffd769', cyan: '#76c8ff', white: '#cccdc7',
      brightBlack: '#a9aaa4', brightRed: '#f68f78', brightGreen: '#b4e97d', brightYellow: '#ffde83',
      brightBlue: '#5ac9ea', brightMagenta: '#ffd769', brightCyan: '#76c8ff', brightWhite: '#cccdc7'
    },
    semantic: { ok: '#b4e97d', warn: '#ffde83', error: '#f68f78', tool: '#5ac9ea' },
    glass: { backgroundGlow: '#333f61', tint: '#242938', rim: '#ceff83', blurPx: 30, saturation: 1.19, surfaceOpacity: 0.49, strongOpacity: 0.9, rimOpacity: 0.41, glowOpacity: 0.29 }
  },
  {
    name: 'lg-tidal-amber', label: "Tidal Amber", description: "tidal amber liquid glass", mode: 'dark',
    colors: {
      background: '#022c31', foreground: '#ece4d3', card: '#07363b', cardForeground: '#ece4d3',
      muted: '#053338', mutedForeground: '#a6b5b1', popover: '#07363b', popoverForeground: '#ece4d3',
      primary: '#2b98ca', primaryForeground: '#000000', secondary: '#0a5f63', secondaryForeground: '#ffffff',
      accent: '#6c79c0', accentForeground: '#000000', border: '#2d9b87', input: '#07363b', ring: '#ac7305',
      midground: '#ac7305', midgroundForeground: '#000000', composerRing: '#ac7305',
      destructive: '#d6313f', destructiveForeground: '#ffffff', sidebarBackground: '#07363b', sidebarBorder: '#2d9b87',
      userBubble: '#0a5f63', userBubbleBorder: '#ac7305'
    },
    darkColors: null,
    terminal: {
      foreground: '#ece4d3', cursor: '#ac7305', selectionBackground: '#0a5f63', black: '#022c31',
      red: '#d6313f', green: '#8d9104', yellow: '#c23b1b', blue: '#6c79c0', magenta: '#2b98ca', cyan: '#ac7305', white: '#ece4d3',
      brightBlack: '#a6b5b1', brightRed: '#d6313f', brightGreen: '#8d9104', brightYellow: '#c23b1b',
      brightBlue: '#6c79c0', brightMagenta: '#2b98ca', brightCyan: '#ac7305', brightWhite: '#ece4d3'
    },
    semantic: { ok: '#8d9104', warn: '#c23b1b', error: '#d6313f', tool: '#6c79c0' },
    glass: { backgroundGlow: '#034e51', tint: '#08383d', rim: '#2d9b87', blurPx: 14, saturation: 1.32, surfaceOpacity: 0.56, strongOpacity: 0.81, rimOpacity: 0.24, glowOpacity: 0.12 }
  },
  {
    name: 'lg-ancient-canopy', label: "Ancient Canopy", description: "ancient canopy liquid glass", mode: 'dark',
    colors: {
      background: '#2e353d', foreground: '#d5cdab', card: '#333c43', cardForeground: '#d5cdab',
      muted: '#323a42', mutedForeground: '#b5af99', popover: '#333c43', popoverForeground: '#d5cdab',
      primary: '#a1c380', primaryForeground: '#000000', secondary: '#4d5a60', secondaryForeground: '#ffffff',
      accent: '#7fbebd', accentForeground: '#000000', border: '#d89ab0', input: '#333c43', ring: '#80bebd',
      midground: '#80bebd', midgroundForeground: '#000000', composerRing: '#80bebd',
      destructive: '#e9887e', destructiveForeground: '#000000', sidebarBackground: '#333c43', sidebarBorder: '#d89ab0',
      userBubble: '#4d5a60', userBubbleBorder: '#80bebd'
    },
    darkColors: null,
    terminal: {
      foreground: '#d5cdab', cursor: '#80bebd', selectionBackground: '#4d5a60', black: '#2e353d',
      red: '#e9887e', green: '#84c39a', yellow: '#dec97f', blue: '#7fbebd', magenta: '#a1c380', cyan: '#80bebd', white: '#d5cdab',
      brightBlack: '#b5af99', brightRed: '#e9887e', brightGreen: '#84c39a', brightYellow: '#dec97f',
      brightBlue: '#7fbebd', brightMagenta: '#a1c380', brightCyan: '#80bebd', brightWhite: '#d5cdab'
    },
    semantic: { ok: '#84c39a', warn: '#dec97f', error: '#e9887e', tool: '#7fbebd' },
    glass: { backgroundGlow: '#48525a', tint: '#353f46', rim: '#d89ab0', blurPx: 18, saturation: 1.08, surfaceOpacity: 0.38, strongOpacity: 0.72, rimOpacity: 0.33, glowOpacity: 0.17 }
  },
  {
    name: 'lg-rosewood-mist', label: "Rosewood Mist", description: "rosewood mist liquid glass", mode: 'dark',
    colors: {
      background: '#171622', foreground: '#ddddf3', card: '#312233', cardForeground: '#ddddf3',
      muted: '#281e2d', mutedForeground: '#a7a5c1', popover: '#312233', popoverForeground: '#ddddf3',
      primary: '#e86f9b', primaryForeground: '#000000', secondary: '#39375c', secondaryForeground: '#ffffff',
      accent: '#bea6e5', accentForeground: '#000000', border: '#9bd2d6', input: '#312233', ring: '#f3b577',
      midground: '#f3b577', midgroundForeground: '#000000', composerRing: '#f3b577',
      destructive: '#d35a82', destructiveForeground: '#000000', sidebarBackground: '#312233', sidebarBorder: '#9bd2d6',
      userBubble: '#39375c', userBubbleBorder: '#f3b577'
    },
    darkColors: null,
    terminal: {
      foreground: '#ddddf3', cursor: '#f3b577', selectionBackground: '#39375c', black: '#171622',
      red: '#d35a82', green: '#32798b', yellow: '#e9b9bb', blue: '#bea6e5', magenta: '#e86f9b', cyan: '#f3b577', white: '#ddddf3',
      brightBlack: '#a7a5c1', brightRed: '#d35a82', brightGreen: '#32798b', brightYellow: '#e9b9bb',
      brightBlue: '#bea6e5', brightMagenta: '#e86f9b', brightCyan: '#f3b577', brightWhite: '#ddddf3'
    },
    semantic: { ok: '#32798b', warn: '#e9b9bb', error: '#d35a82', tool: '#bea6e5' },
    glass: { backgroundGlow: '#533448', tint: '#362436', rim: '#9bd2d6', blurPx: 22, saturation: 1.21, surfaceOpacity: 0.45, strongOpacity: 0.83, rimOpacity: 0.42, glowOpacity: 0.22 }
  },
  {
    name: 'lg-blue-lacquer', label: "Blue Lacquer", description: "blue lacquer liquid glass", mode: 'dark',
    colors: {
      background: '#21202a', foreground: '#deddbb', card: '#2a2835', cardForeground: '#deddbb',
      muted: '#282632', mutedForeground: '#acaa90', popover: '#2a2835', popoverForeground: '#deddbb',
      primary: '#7e94dc', primaryForeground: '#000000', secondary: '#444c73', secondaryForeground: '#ffffff',
      accent: '#7fafce', accentForeground: '#000000', border: '#9c7fbb', input: '#2a2835', ring: '#ead084',
      midground: '#ead084', midgroundForeground: '#000000', composerRing: '#ead084',
      destructive: '#ee3520', destructiveForeground: '#000000', sidebarBackground: '#2a2835', sidebarBorder: '#9c7fbb',
      userBubble: '#444c73', userBubbleBorder: '#ead084'
    },
    darkColors: null,
    terminal: {
      foreground: '#deddbb', cursor: '#ead084', selectionBackground: '#444c73', black: '#21202a',
      red: '#ee3520', green: '#92bf6c', yellow: '#ffb33f', blue: '#7fafce', magenta: '#7e94dc', cyan: '#ead084', white: '#deddbb',
      brightBlack: '#acaa90', brightRed: '#ee3520', brightGreen: '#92bf6c', brightYellow: '#ffb33f',
      brightBlue: '#7fafce', brightMagenta: '#7e94dc', brightCyan: '#ead084', brightWhite: '#deddbb'
    },
    semantic: { ok: '#92bf6c', warn: '#ffb33f', error: '#ee3520', tool: '#7fafce' },
    glass: { backgroundGlow: '#393749', tint: '#2d2b39', rim: '#9c7fbb', blurPx: 26, saturation: 1.34, surfaceOpacity: 0.52, strongOpacity: 0.74, rimOpacity: 0.25, glowOpacity: 0.27 }
  },
  {
    name: 'lg-violet-transit', label: "Violet Transit", description: "violet transit liquid glass", mode: 'dark',
    colors: {
      background: '#282e3c', foreground: '#a5afcb', card: '#3e3556', cardForeground: '#a5afcb',
      muted: '#36324c', mutedForeground: '#94a1bc', popover: '#3e3556', popoverForeground: '#a5afcb',
      primary: '#bb92e7', primaryForeground: '#000000', secondary: '#4e5976', secondaryForeground: '#ffffff',
      accent: '#f37c6d', accentForeground: '#000000', border: '#cce58d', input: '#3e3556', ring: '#81b7fc',
      midground: '#81b7fc', midgroundForeground: '#000000', composerRing: '#81b7fc',
      destructive: '#ec7187', destructiveForeground: '#000000', sidebarBackground: '#3e3556', sidebarBorder: '#cce58d',
      userBubble: '#4e5976', userBubbleBorder: '#81b7fc'
    },
    darkColors: null,
    terminal: {
      foreground: '#a5afcb', cursor: '#81b7fc', selectionBackground: '#4e5976', black: '#282e3c',
      red: '#ec7187', green: '#89e8fc', yellow: '#fbb86c', blue: '#f37c6d', magenta: '#bb92e7', cyan: '#81b7fc', white: '#a5afcb',
      brightBlack: '#94a1bc', brightRed: '#ec7187', brightGreen: '#89e8fc', brightYellow: '#fbb86c',
      brightBlue: '#f37c6d', brightMagenta: '#bb92e7', brightCyan: '#81b7fc', brightWhite: '#a5afcb'
    },
    semantic: { ok: '#89e8fc', warn: '#fbb86c', error: '#ec7187', tool: '#f37c6d' },
    glass: { backgroundGlow: '#6c4c82', tint: '#42365a', rim: '#cce58d', blurPx: 30, saturation: 1.1, surfaceOpacity: 0.59, strongOpacity: 0.85, rimOpacity: 0.34, glowOpacity: 0.32 }
  },
  {
    name: 'lg-electric-cobalt', label: "Electric Cobalt", description: "electric cobalt liquid glass", mode: 'dark',
    colors: {
      background: '#19334e', foreground: '#f6f6f6', card: '#1d3e61', cardForeground: '#f6f6f6',
      muted: '#1c3b5c', mutedForeground: '#c9d7e5', popover: '#1d3e61', popoverForeground: '#f6f6f6',
      primary: '#ffdc04', primaryForeground: '#000000', secondary: '#0044a8', secondaryForeground: '#ffffff',
      accent: '#0475ff', accentForeground: '#000000', border: '#00afbf', input: '#1d3e61', ring: '#ff0475',
      midground: '#ff0475', midgroundForeground: '#000000', composerRing: '#ff0475',
      destructive: '#ff6682', destructiveForeground: '#000000', sidebarBackground: '#1d3e61', sidebarBorder: '#00afbf',
      userBubble: '#0044a8', userBubbleBorder: '#ff0475'
    },
    darkColors: null,
    terminal: {
      foreground: '#f6f6f6', cursor: '#ff0475', selectionBackground: '#0044a8', black: '#19334e',
      red: '#ff6682', green: '#29dd00', yellow: '#ffb304', blue: '#0475ff', magenta: '#ffdc04', cyan: '#ff0475', white: '#f6f6f6',
      brightBlack: '#c9d7e5', brightRed: '#ff6682', brightGreen: '#29dd00', brightYellow: '#ffb304',
      brightBlue: '#0475ff', brightMagenta: '#ffdc04', brightCyan: '#ff0475', brightWhite: '#f6f6f6'
    },
    semantic: { ok: '#29dd00', warn: '#ffb304', error: '#ff6682', tool: '#0475ff' },
    glass: { backgroundGlow: '#224a72', tint: '#1e4267', rim: '#00afbf', blurPx: 14, saturation: 1.23, surfaceOpacity: 0.41, strongOpacity: 0.76, rimOpacity: 0.43, glowOpacity: 0.15 }
  },
  {
    name: 'lg-ultraviolet-gold', label: "Ultraviolet Gold", description: "ultraviolet gold liquid glass", mode: 'dark',
    colors: {
      background: '#2b2d52', foreground: '#eefefd', card: '#363763', cardForeground: '#eefefd',
      muted: '#32335c', mutedForeground: '#c5c6dd', popover: '#363763', popoverForeground: '#eefefd',
      primary: '#f0b207', primaryForeground: '#000000', secondary: '#57578c', secondaryForeground: '#ffffff',
      accent: '#9efcf3', accentForeground: '#000000', border: '#81fbdb', input: '#363763', ring: '#f9649b',
      midground: '#f9649b', midgroundForeground: '#000000', composerRing: '#f9649b',
      destructive: '#f94d81', destructiveForeground: '#000000', sidebarBackground: '#363763', sidebarBorder: '#81fbdb',
      userBubble: '#57578c', userBubbleBorder: '#f9649b'
    },
    darkColors: null,
    terminal: {
      foreground: '#eefefd', cursor: '#f9649b', selectionBackground: '#57578c', black: '#2b2d52',
      red: '#f94d81', green: '#b0fc91', yellow: '#f59408', blue: '#9efcf3', magenta: '#f0b207', cyan: '#f9649b', white: '#eefefd',
      brightBlack: '#c5c6dd', brightRed: '#f94d81', brightGreen: '#b0fc91', brightYellow: '#f59408',
      brightBlue: '#9efcf3', brightMagenta: '#f0b207', brightCyan: '#f9649b', brightWhite: '#eefefd'
    },
    semantic: { ok: '#b0fc91', warn: '#f59408', error: '#f94d81', tool: '#9efcf3' },
    glass: { backgroundGlow: '#464777', tint: '#383865', rim: '#81fbdb', blurPx: 18, saturation: 1.36, surfaceOpacity: 0.48, strongOpacity: 0.87, rimOpacity: 0.26, glowOpacity: 0.2 }
  },
  {
    name: 'lg-mint-nebula', label: "Mint Nebula", description: "mint nebula liquid glass", mode: 'dark',
    colors: {
      background: '#1c1d2a', foreground: '#a6a8cf', card: '#242736', cardForeground: '#a6a8cf',
      muted: '#222432', mutedForeground: '#9397ba', popover: '#242736', popoverForeground: '#a6a8cf',
      primary: '#5ce8dc', primaryForeground: '#000000', secondary: '#3b3f5b', secondaryForeground: '#ffffff',
      accent: '#fde6fc', accentForeground: '#000000', border: '#b0ceff', input: '#242736', ring: '#8bceff',
      midground: '#8bceff', midgroundForeground: '#000000', composerRing: '#8bceff',
      destructive: '#d36790', destructiveForeground: '#000000', sidebarBackground: '#242736', sidebarBorder: '#b0ceff',
      userBubble: '#3b3f5b', userBubbleBorder: '#8bceff'
    },
    darkColors: null,
    terminal: {
      foreground: '#a6a8cf', cursor: '#8bceff', selectionBackground: '#3b3f5b', black: '#1c1d2a',
      red: '#d36790', green: '#5be8dd', yellow: '#fcffc5', blue: '#fde6fc', magenta: '#5ce8dc', cyan: '#8bceff', white: '#a6a8cf',
      brightBlack: '#9397ba', brightRed: '#d36790', brightGreen: '#5be8dd', brightYellow: '#fcffc5',
      brightBlue: '#fde6fc', brightMagenta: '#5ce8dc', brightCyan: '#8bceff', brightWhite: '#a6a8cf'
    },
    semantic: { ok: '#5be8dd', warn: '#fcffc5', error: '#d36790', tool: '#fde6fc' },
    glass: { backgroundGlow: '#313548', tint: '#262a39', rim: '#b0ceff', blurPx: 22, saturation: 1.12, surfaceOpacity: 0.55, strongOpacity: 0.78, rimOpacity: 0.35, glowOpacity: 0.25 }
  },
  {
    name: 'lg-quiet-viridian', label: "Quiet Viridian", description: "quiet viridian liquid glass", mode: 'dark',
    colors: {
      background: '#111010', foreground: '#d9d4c8', card: '#1c1b1b', cardForeground: '#d9d4c8',
      muted: '#181717', mutedForeground: '#a8a399', popover: '#1c1b1b', popoverForeground: '#d9d4c8',
      primary: '#4d8f6d', primaryForeground: '#000000', secondary: '#333131', secondaryForeground: '#ffffff',
      accent: '#5cafb2', accentForeground: '#000000', border: '#5daeb2', input: '#1c1b1b', ring: '#84a364',
      midground: '#84a364', midgroundForeground: '#000000', composerRing: '#84a364',
      destructive: '#c8757c', destructiveForeground: '#000000', sidebarBackground: '#1c1b1b', sidebarBorder: '#5daeb2',
      userBubble: '#333131', userBubbleBorder: '#84a364'
    },
    darkColors: null,
    terminal: {
      foreground: '#d9d4c8', cursor: '#84a364', selectionBackground: '#333131', black: '#111010',
      red: '#c8757c', green: '#83a364', yellow: '#d18d6b', blue: '#5cafb2', magenta: '#4d8f6d', cyan: '#84a364', white: '#d9d4c8',
      brightBlack: '#a8a399', brightRed: '#c8757c', brightGreen: '#83a364', brightYellow: '#d18d6b',
      brightBlue: '#5cafb2', brightMagenta: '#4d8f6d', brightCyan: '#84a364', brightWhite: '#d9d4c8'
    },
    semantic: { ok: '#83a364', warn: '#d18d6b', error: '#c8757c', tool: '#5cafb2' },
    glass: { backgroundGlow: '#2a2828', tint: '#1d1c1c', rim: '#5daeb2', blurPx: 26, saturation: 1.25, surfaceOpacity: 0.37, strongOpacity: 0.89, rimOpacity: 0.44, glowOpacity: 0.3 }
  },
  {
    name: 'lg-deep-lagoon', label: "Deep Lagoon", description: "deep lagoon liquid glass", mode: 'dark',
    colors: {
      background: '#04232d', foreground: '#d2eae6', card: '#092f40', cardForeground: '#d2eae6',
      muted: '#072b3a', mutedForeground: '#9dbfbd', popover: '#092f40', popoverForeground: '#d2eae6',
      primary: '#46efbc', primaryForeground: '#000000', secondary: '#154a5f', secondaryForeground: '#ffffff',
      accent: '#7f5df0', accentForeground: '#000000', border: '#e3748f', input: '#092f40', ring: '#469bef',
      midground: '#469bef', midgroundForeground: '#000000', composerRing: '#469bef',
      destructive: '#eb636c', destructiveForeground: '#000000', sidebarBackground: '#092f40', sidebarBorder: '#e3748f',
      userBubble: '#154a5f', userBubbleBorder: '#469bef'
    },
    darkColors: null,
    terminal: {
      foreground: '#d2eae6', cursor: '#469bef', selectionBackground: '#154a5f', black: '#04232d',
      red: '#eb636c', green: '#45efbc', yellow: '#e8c580', blue: '#7f5df0', magenta: '#46efbc', cyan: '#469bef', white: '#d2eae6',
      brightBlack: '#9dbfbd', brightRed: '#eb636c', brightGreen: '#45efbc', brightYellow: '#e8c580',
      brightBlue: '#7f5df0', brightMagenta: '#46efbc', brightCyan: '#469bef', brightWhite: '#d2eae6'
    },
    semantic: { ok: '#45efbc', warn: '#e8c580', error: '#eb636c', tool: '#7f5df0' },
    glass: { backgroundGlow: '#10485f', tint: '#0a3245', rim: '#e3748f', blurPx: 30, saturation: 1.38, surfaceOpacity: 0.44, strongOpacity: 0.8, rimOpacity: 0.27, glowOpacity: 0.13 }
  },
  {
    name: 'lg-lunar-periwinkle', label: "Lunar Periwinkle", description: "lunar periwinkle liquid glass", mode: 'dark',
    colors: {
      background: '#212634', foreground: '#c7d7f3', card: '#2b3144', cardForeground: '#c7d7f3',
      muted: '#292f40', mutedForeground: '#a6b4d0', popover: '#2b3144', popoverForeground: '#c7d7f3',
      primary: '#82b8fc', primaryForeground: '#000000', secondary: '#435070', secondaryForeground: '#ffffff',
      accent: '#66cefb', accentForeground: '#000000', border: '#86eef9', input: '#2b3144', ring: '#b199fc',
      midground: '#b199fc', midgroundForeground: '#000000', composerRing: '#b199fc',
      destructive: '#fb7591', destructiveForeground: '#000000', sidebarBackground: '#2b3144', sidebarBorder: '#86eef9',
      userBubble: '#435070', userBubbleBorder: '#b199fc'
    },
    darkColors: null,
    terminal: {
      foreground: '#c7d7f3', cursor: '#b199fc', selectionBackground: '#435070', black: '#212634',
      red: '#fb7591', green: '#cbe58d', yellow: '#fcb477', blue: '#66cefb', magenta: '#82b8fc', cyan: '#b199fc', white: '#c7d7f3',
      brightBlack: '#a6b4d0', brightRed: '#fb7591', brightGreen: '#cbe58d', brightYellow: '#fcb477',
      brightBlue: '#66cefb', brightMagenta: '#82b8fc', brightCyan: '#b199fc', brightWhite: '#c7d7f3'
    },
    semantic: { ok: '#cbe58d', warn: '#fcb477', error: '#fb7591', tool: '#66cefb' },
    glass: { backgroundGlow: '#444f70', tint: '#2f364a', rim: '#86eef9', blurPx: 14, saturation: 1.14, surfaceOpacity: 0.51, strongOpacity: 0.71, rimOpacity: 0.36, glowOpacity: 0.18 }
  },
]

for (const theme of fullThemes) theme.darkColors = theme.colors

function ensureGlassStyle() {
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    :root[data-liquid-glass-owned='1'] body {
      background-color: var(--lg-background);
      background-image:
        radial-gradient(70rem 42rem at 8% -10%, color-mix(in srgb, var(--lg-background-glow) 72%, transparent), transparent 68%),
        radial-gradient(55rem 38rem at 94% 8%, color-mix(in srgb, var(--ui-accent) 28%, transparent), transparent 66%),
        linear-gradient(155deg, color-mix(in srgb, var(--lg-glass-tint) 58%, var(--lg-background)), var(--lg-background));
      background-attachment: fixed;
    }
    :root[data-liquid-glass-owned='1'] :where([role='dialog'], [data-radix-popper-content-wrapper] > *, aside) {
      backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturation));
      -webkit-backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturation));
      box-shadow: inset 0 1px 0 color-mix(in srgb, var(--lg-rim) calc(var(--lg-rim-opacity) * 100%), transparent), 0 18px 46px color-mix(in srgb, var(--lg-background) 58%, transparent);
    }
    :root[data-liquid-glass-owned='1'] [data-liquid-glass-preview='1'] {
      backdrop-filter: blur(18px) saturate(1.2);
      -webkit-backdrop-filter: blur(18px) saturate(1.2);
    }
    :root[data-liquid-glass-owned='1'] [data-slot='aui_user-message-root'] {
      --ui-chat-surface-background: transparent !important;
      background: transparent !important;
    }
    :root[data-liquid-glass-owned='1'] [data-slot='aui_user-message-root']::before {
      background: transparent !important;
    }
    :root[data-liquid-glass-owned='1'] :where([role='tablist'], [data-slot='tabs-list'], [data-zone-tabstrip]) {
      background-color: var(--lg-tab-strip-background) !important;
      backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturation));
      -webkit-backdrop-filter: blur(var(--lg-blur)) saturate(var(--lg-saturation));
      box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--lg-rim) 42%, transparent);
    }
    :root[data-liquid-glass-owned='1'] :where([role='tab'], [data-slot='tabs-trigger']) {
      --tab-bg: transparent !important;
      background-color: transparent !important;
      color: var(--ui-text-secondary) !important;
    }
    :root[data-liquid-glass-owned='1'] :where(
      [role='tab'][aria-selected='true'],
      [role='tab'][data-active='true'],
      [role='tab'][data-state='active'],
      [data-slot='tabs-trigger'][data-state='active']
    ) {
      --tab-bg: var(--lg-tab-active-background) !important;
      background-color: var(--lg-tab-active-background) !important;
      color: var(--theme-foreground) !important;
      box-shadow: inset 0 -2px 0 var(--theme-primary), inset 0 1px 0 color-mix(in srgb, var(--lg-rim) 55%, transparent) !important;
    }
    @media (prefers-reduced-motion: reduce) {
      :root[data-liquid-glass-owned='1'] * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
    }
  `
  document.head.appendChild(style)
}

function readUserThemes() {
  try { return JSON.parse(window.localStorage.getItem(USER_THEMES_KEY) || '{}') } catch { return {} }
}

function installPackThemes() {
  const stored = readUserThemes()
  let changed = false
  for (const theme of fullThemes) {
    if (JSON.stringify(stored[theme.name]) !== JSON.stringify(theme)) {
      stored[theme.name] = theme
      changed = true
    }
  }
  if (changed) window.localStorage.setItem(USER_THEMES_KEY, JSON.stringify(stored))
}

function clearOwnedStyles(root) {
  for (const key of OWNED_KEYS) root.style.removeProperty(key)
  delete root.dataset.liquidGlassOwned
}

function applyGlassPalette() {
  const root = document.documentElement
  const activeName = root.dataset.hermesTheme || ''
  const theme = fullThemes.find(candidate => candidate.name === activeName)
  if (!theme) {
    if (root.dataset.liquidGlassOwned === '1') clearOwnedStyles(root)
    return
  }
  ensureGlassStyle()
  const { colors, semantic, glass } = theme
  const values = {
    '--ui-cyan': semantic.tool, '--ui-blue': semantic.tool, '--ui-green': semantic.ok, '--ui-yellow': semantic.warn,
    '--ui-orange': semantic.warn, '--ui-red': semantic.error, '--ui-purple': colors.primary, '--ui-warm': colors.primary,
    '--ui-selection-background': `color-mix(in srgb, ${colors.accent} 38%, transparent)`,
    '--ui-chat-surface-background': `color-mix(in srgb, ${glass.tint} ${Math.round(glass.surfaceOpacity * 100)}%, transparent)`,
    '--ui-sidebar-surface-background': `color-mix(in srgb, ${glass.tint} ${Math.round(glass.strongOpacity * 100)}%, transparent)`,
    '--ui-bg-card': `color-mix(in srgb, ${glass.tint} ${Math.round(glass.surfaceOpacity * 100)}%, transparent)`,
    '--ui-bg-elevated': `color-mix(in srgb, ${glass.tint} ${Math.round(glass.strongOpacity * 100)}%, transparent)`,
    '--ui-bg-editor': `color-mix(in srgb, ${glass.tint} ${Math.round(glass.strongOpacity * 100)}%, transparent)`,
    '--lg-background': colors.background, '--lg-background-glow': glass.backgroundGlow, '--lg-glass-tint': glass.tint, '--lg-rim': glass.rim,
    '--lg-blur': `${glass.blurPx}px`, '--lg-saturation': String(glass.saturation), '--lg-surface-opacity': String(glass.surfaceOpacity),
    '--lg-strong-opacity': String(glass.strongOpacity), '--lg-rim-opacity': String(glass.rimOpacity), '--lg-glow-opacity': String(glass.glowOpacity),
    '--lg-tab-strip-background': `color-mix(in srgb, ${glass.tint} 42%, transparent)`,
    '--lg-tab-active-background': `color-mix(in srgb, ${colors.midground} 22%, color-mix(in srgb, ${glass.tint} 38%, transparent))`
  }
  for (const [key, value] of Object.entries(values)) root.style.setProperty(key, value)
  root.dataset.liquidGlassOwned = '1'
}

function watchActivePack() {
  applyGlassPalette()
  const observer = new MutationObserver(applyGlassPalette)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-hermes-theme', 'class'] })
}

function applyPack(themeName) {
  installPackThemes()
  window.localStorage.setItem(ACTIVE_THEME_KEY, themeName)
  window.location.reload()
}

function ThemeTile({ theme }) {
  const active = window.localStorage.getItem(ACTIVE_THEME_KEY) === theme.name
  const colors = theme.colors
  return jsxs('button', {
    type: 'button',
    'aria-pressed': active,
    onClick: () => applyPack(theme.name),
    className: 'group overflow-hidden rounded-2xl border p-3 text-left transition-transform hover:-translate-y-0.5 focus-visible:outline-none',
    style: {
      color: colors.foreground,
      borderColor: active ? colors.accent : colors.border,
      background: `radial-gradient(circle at 16% 0%, ${theme.glass.backgroundGlow}, transparent 62%), ${colors.background}`,
      boxShadow: active ? `0 0 0 2px ${colors.accent}, 0 16px 34px ${colors.background}88` : `0 12px 28px ${colors.background}66`
    },
    children: [
      jsxs('div', {
        'data-liquid-glass-preview': '1',
        className: 'mb-3 h-16 rounded-xl border p-2',
        style: { background: `${theme.glass.tint}aa`, borderColor: theme.glass.rim, boxShadow: `inset 0 1px 0 ${theme.glass.rim}, inset 0 -24px 34px ${theme.glass.backgroundGlow}55` },
        children: [
          jsx('div', { className: 'h-2 w-3/5 rounded-full', style: { background: colors.primary } }),
          jsx('div', { className: 'mt-2 h-2 w-2/5 rounded-full', style: { background: colors.accent } }),
          jsx('div', { className: 'mt-2 h-1.5 w-4/5 rounded-full opacity-70', style: { background: colors.foreground } })
        ]
      }),
      jsx('span', { className: 'block text-sm font-semibold', children: theme.label }),
      jsx('span', { className: 'mt-1 block text-xs opacity-75', children: theme.description }),
      active ? jsx('span', { className: 'mt-2 block text-xs font-medium', style: { color: colors.accent }, children: 'Active' }) : null
    ]
  })
}

function PackPage() {
  return jsxs('main', {
    className: 'h-full overflow-auto p-6',
    children: [
      jsx('div', { className: 'text-xs font-medium uppercase tracking-[0.22em] text-(--ui-accent)', children: 'Hermes Desktop' }),
      jsx('h1', { className: 'mt-2 text-2xl font-semibold tracking-tight', children: 'Liquid Glass' }),
      jsx('p', { className: 'mt-2 max-w-2xl text-sm text-(--ui-text-secondary)', children: '120 hand-built glass styles. Pick one and the whole app repaints.' }),
      jsx('div', { className: 'mt-6 grid gap-3', style: { gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))' }, children: fullThemes.map(theme => jsx(ThemeTile, { theme }, theme.name)) })
    ]
  })
}

export default {
  id: ID,
  name: 'Hermes Liquid Glass',
  description: 'Distinct liquid-glass themes for Hermes Desktop.',
  defaultEnabled: true,
  register(ctx) {
    installPackThemes()
    watchActivePack()
    ctx.registerMany([
      { id: 'page', area: ROUTES_AREA, data: { path: '/liquid-glass' }, title: 'Liquid Glass', render: () => jsx(PackPage, {}) },
      { id: 'nav', area: SIDEBAR_NAV_AREA, order: 58, data: { path: '/liquid-glass', label: 'Liquid Glass', codicon: 'layers' } }
    ])
  }
}
