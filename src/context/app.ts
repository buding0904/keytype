import { createContext, useEffect, useMemo, useRef, useState } from 'react'
import generateText from '@/generator/text'
import { useDb } from '@/hooks/db'

export enum TypingStatus {
  ready = 'ready',
  recording = 'recording',
  end = 'end',
}

interface AppContext {
  text: string
  setText: ContextSetter<string>

  input: string
  putInput: (char: string) => void
  popInput: VoidFunction

  status: TypingStatus
  setStatus: ContextSetter<TypingStatus>

  refresh: VoidFunction

  stat: {
    speed: number
    accuracy: number
    typos: number
  }
}

const ctx = createContext<AppContext>({} as AppContext)

export function useInitialAppContext(): AppContext {
  const { db } = useDb()
  const [text, setText] = useState(generateText(db.setting))
  const [input, setInput] = useState('')
  const [status, setStatus] = useState<TypingStatus>(TypingStatus.ready)
  const [duration, setDuration] = useState(0)
  const [typos, setTypos] = useState(0)
  const inputRef = useRef(input) // 创建input的引用

  useEffect(() => {
    inputRef.current = input // 在input状态更新时，同步更新引用的值
  }, [input])

  useEffect(() => {
    if (status !== TypingStatus.recording) {
      return
    }

    const timer = setInterval(() => {
      setDuration(duration => duration + 0.5)
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [status])

  useEffect(() => {
    if (input.length >= text.length) {
      setStatus(TypingStatus.end)
    }
  }, [text, input])

  const speed = useMemo(() => {
    if (duration == 0) return 0

    return Math.floor((input.length / duration) * 60)
  }, [duration])

  const accuracy = useMemo(() => {
    if (duration == 0 || input.length === 0) return 0

    const correctChars = [...input].reduce((acc, cur, i) => {
      if (cur === text[i]) {
        return acc + 1
      }
      return acc
    }, 0)

    return Math.floor((correctChars / input.length) * 100)
  }, [duration])

  const putInput = (char: string) => {
    if (char !== text[inputRef.current.length]) {
      setTypos(typos => typos + 1)
    }

    setInput(input => input + char)
  }

  const popInput = () => {
    setInput(input => input.slice(0, -1))
  }

  const refresh = () => {
    setText(generateText(db.setting))
    setInput('')
    setStatus(TypingStatus.ready)
    setDuration(0)
    setTypos(0)
  }

  return {
    text,
    setText,
    input,
    putInput,
    popInput,
    status,
    setStatus,
    refresh,
    stat: {
      speed,
      accuracy,
      typos,
    },
  }
}

export default ctx
