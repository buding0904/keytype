import { useEffect, useState } from "react"

export const isWindows = /windows|win32/i.test(navigator.userAgent)

export interface DurationTimer {
  duration: number
  pause: VoidFunction
  continue: VoidFunction
}

// create a timer witch can be paused
export const useDurationTimer = (): DurationTimer => {
  const [duration, setDuration] = useState(0)
  const [paused, setPaused] = useState(true)

  useEffect(() => {
    let timer = setInterval(() => {
      if (paused) return

      setDuration(duration => duration + 0.5)
    }, 500)

    return () => { clearInterval(timer) }
  }, [paused])

  return {
    duration,
    pause: () => setPaused(true),
    continue: () => setPaused(false),
  }
}
