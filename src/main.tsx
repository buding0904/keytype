import "normalize.css"
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeManagerProvider } from '@tilemoon/react-theme-manager'
import { themes } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeManagerProvider onThemeInit={localTheme => {
      return Object.values(themes).find(item => item.name == localTheme) ?? themes.dark
    }}>
      <App />
    </ThemeManagerProvider>
  </React.StrictMode>
)
