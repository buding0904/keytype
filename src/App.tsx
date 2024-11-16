import { FC } from 'react'
import context, { useInitialAppContext } from '@/context/app'

import { Header } from './widget/header'
import Prompter from '@/widget/prompter'
import Statistics from '@/widget/statistics'
import { KeyBoard } from '@/widget/keyboard'

const App: FC = () => {
  const initialContext = useInitialAppContext()

  return (
    <context.Provider value={initialContext}>
      <div className="flex flex-col items-center h-screen py-10vh">
        <Header />
        <Statistics />
        <Prompter text={initialContext.text} />
        <KeyBoard />
      </div>
    </context.Provider>
  )
}

export default App
