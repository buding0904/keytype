import { FC, useState } from 'react'
import Keyboard from './widget/keyboard'

import './App.css'
import { css } from '@emotion/css'
import { KeyKeyTheme, useTheme } from './theme'

const App: FC = () => {
  const { theme } = useTheme<KeyKeyTheme>()

  return <div className={css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}>
    <div className={css``}></div>
    <div className={css`
      color: ${theme.colors.font};
      font-size: 20px;
      margin: 24px 0px;
      letter-spacing: 0.1rem;
    `}>asfb</div>
    <Keyboard></Keyboard>
  </div>
}

export default App
