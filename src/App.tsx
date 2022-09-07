import { FC, useContext, useState } from 'react'
import { MacKeyBoard } from './widget/keyboard'

import { css } from '@emotion/css'
import TextChecker from './widget/text-checker'
import Statistics from './widget/statistics'

import generateText from './text-generator'
import globalContext from './context/global'

const App: FC = () => {
  const { text, setText } = useContext(globalContext)

  return <div className={css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
  `}>
    <Statistics></Statistics>
    <TextChecker text={text} onFinished={() => {
      setText(generateText({}))
    }}></TextChecker>
    <MacKeyBoard></MacKeyBoard>
  </div>
}

export default App
