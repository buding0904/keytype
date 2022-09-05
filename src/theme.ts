import { ThemeConfig } from '@tilemoon/react-theme-manager'
export * from '@tilemoon/react-theme-manager'

interface ThemeColors {
  keyBorder: string,
}

export type KeyKeyTheme = ThemeConfig<ThemeColors>

// colors will auto inject into css like `--font-color: black;`
const ThemeLight: KeyKeyTheme = {
  name: 'light',
  colors: {
    keyBorder: '#757678',
  },
}

const ThemeDark: KeyKeyTheme = {
  name: 'dark',
  colors: {
    keyBorder: '#757678',
  },
}

export const themes = {
  light: ThemeLight,
  dark: ThemeDark,
} as const
