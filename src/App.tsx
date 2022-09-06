import { FC, useState } from 'react'
import { MacKeyBoard } from './widget/keyboard'

import { css } from '@emotion/css'
import TextChecker from './widget/text-checker'
import generateText from './text-generator'

const App: FC = () => {
  const [text, setText] = useState(generateText({}))

  return <div className={css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}>
    <div className={css``}></div>
    <TextChecker text={text} onFinished={() => {
      setText(generateText({}))
    }}></TextChecker>
    <MacKeyBoard></MacKeyBoard>
  </div>
}

export default App
