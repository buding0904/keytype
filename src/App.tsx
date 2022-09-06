import { FC, useState } from 'react'
import Keyboard from './widget/keyboard'

import './App.css'
import { css } from '@emotion/css'
import TextChecker from './widget/text-checker'
import generateText from './text-generator'

const App: FC = () => {
  return <div className={css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}>
    <div className={css``}></div>
    <TextChecker text={generateText({})}></TextChecker>
    <Keyboard></Keyboard>
  </div>
}

export default App
