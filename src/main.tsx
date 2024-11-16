import './init'

import './index.css'
import 'virtual:uno.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@arco-design/web-react/dist/css/arco.css'

document.body.setAttribute('arco-theme', 'dark')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
