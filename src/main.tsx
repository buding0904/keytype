import "normalize.css"
import './index.css'

import { ThemeManagerProvider } from '@tilemoon/react-theme-manager'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { themes } from './theme'
import { GlobalCtxProvider } from "./context/global"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeManagerProvider onThemeInit={localTheme => {
      return Object.values(themes).find(item => item.name == localTheme) ?? themes.dark
    }}>
      <GlobalCtxProvider>
        <App />
      </GlobalCtxProvider>
    </ThemeManagerProvider>
  </React.StrictMode>
)
