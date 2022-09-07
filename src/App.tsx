import { FC, useContext } from 'react'
import { MacKeyBoard } from './widget/keyboard'

import TextChecker from './widget/text-checker'
import Statistics from './widget/statistics'

import generateText from './generator/text'
import globalContext from './context/global'
import HiddenInput from './widget/hidden-input'

const App: FC = () => {
  const { text, setText } = useContext(globalContext)

  return <div className="f-col a-c">
    <Statistics />
    <TextChecker text={text} />
    <HiddenInput onFinished={() => {
      setText(generateText({}))
    }} />
    <MacKeyBoard />
  </div>
}

export default App
