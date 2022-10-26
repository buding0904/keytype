import React, { createContext, ReactNode, useEffect, useMemo, useState } from "react"
import generateText from '../generator/text'
import { DurationTimer, useDurationTimer } from "../utils"

interface StatData {
  speed: number
  accuracy: number
  typos: number
}

export enum KeyboardStatus {
  ready = 'ready',
  recording = 'recording',
  pause = 'pause'
}

interface GlobalContextProps {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>

  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>

  status: KeyboardStatus
  setStatus: React.Dispatch<React.SetStateAction<KeyboardStatus>>

  stat: StatData
  setStat: React.Dispatch<React.SetStateAction<StatData>>

  durationTimer: DurationTimer
}

const ctx = createContext<GlobalContextProps>({} as GlobalContextProps)

export const GlobalCtxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [text, setText] = useState(generateText({}))
  const [input, setInput] = useState('')
  const [stat, setStat] = useState<StatData>({
    speed: 0,
    accuracy: 0,
    typos: 0,
  })
  const [status, setStatus] = useState<KeyboardStatus>(KeyboardStatus.ready)
  const durationTimer = useDurationTimer()

  useEffect(() => {
    if (status == KeyboardStatus.recording) {
      durationTimer.continue()
    } else {
      durationTimer.pause()
    }
  }, [status])

  return <ctx.Provider value={{
    text,
    setText,
    input,
    setInput,

    stat,
    setStat,

    status,
    setStatus,

    durationTimer,
  }}>
    {children}
  </ctx.Provider>
}

export default ctx
