import { FC, useState } from 'react'
import Keyboard from './widget/keyboard'

import './App.css'
import { css } from '@emotion/css'

const App: FC = () => {
  return <div className={css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}>
    <Keyboard></Keyboard>
  </div>
}

export default App
