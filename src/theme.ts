import { ThemeConfig } from '@tilemoon/react-theme-manager'
export * from '@tilemoon/react-theme-manager'

interface ThemeColors {
  pageBg: string,
  font: string,
  keyFont: string,
  keyBorder: string,

  keyPressed: string,
  keyCorrect: string,
  keyTypo: string,

  letterCorrect: string,
  letterTypo: string,
}

export type KeyKeyTheme = ThemeConfig<ThemeColors>

// colors will auto inject into css like `--font-color: black;`
const ThemeLight: KeyKeyTheme = {
  name: 'light',
  colors: {
    pageBg: '#1D1D1D',
    font: '#ffffff',
    keyFont: '#ffffff',
    keyBorder: '#757678',

    keyPressed: 'rgba(122, 122, 122, 0.7)',
    keyCorrect: 'rgba(100, 200, 100, 0.5)',
    keyTypo: 'rgba(255, 80, 120, 0.5)',

    letterCorrect: '#715963',
    letterTypo: '#FA4764',
  },
}

const ThemeDark: KeyKeyTheme = {
  name: 'dark',
  colors: {
    pageBg: '#1D1D1D',
    font: '#ffffff',
    keyFont: '#ffffff',
    keyBorder: '#757678',

    keyPressed: 'rgba(122, 122, 122, 0.7)',
    keyCorrect: 'rgba(100, 200, 100, 0.5)',
    keyTypo: 'rgba(255, 80, 120, 0.5)',

    letterCorrect: '#715963',
    letterTypo: '#FA4764',
  },
}

export const themes = {
  light: ThemeLight,
  dark: ThemeDark,
} as const
