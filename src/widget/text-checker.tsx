import { css } from "@emotion/css";
import { FC, useContext, useEffect, useMemo, useState } from "react";
import { onKeydown } from '../events'

import globalContext from '../context/global'

const TextCheckerCss = css`
  color: var(--font);
  font-size: 20px;
  margin: 80px 0px;
  letter-spacing: 0.1rem;
  font-family: 'Code New Roman', sans-serif;
  text-align: center;
`

enum LetterStatus {
  cursor,
  correct,
  typo,
}

interface LetterProps {
  children?: React.ReactNode
  status?: LetterStatus
}

const Letter: FC<LetterProps> = ({
  status,
  children
}) => {
  const statusCss = useMemo(() => {
    switch(status) {
      case LetterStatus.cursor:
        return 'background-color: #5AA3E8;'
      case LetterStatus.correct:
        return `color: var(--letter-correct)`
      case LetterStatus.typo:
        return `color: var(--letter-typo)`
    }
    return ''
  }, [status])

  return <span className={css`
    ${statusCss}
  `}>{children}</span>
}

interface TextCheckerProps {
  text: string
}

const TextChecker: FC<TextCheckerProps> = ({ text }) => {
  const { input, status, setStatus, setStat } = useContext(globalContext)
  const [inputLen, setInputLen] = useState(input.length)

  const letters = [...text]

  useEffect(() => {
    return onKeydown(e => {
      if (e.code === 'Enter' && status === 'ready') {
        setStatus('recording')
      }
    })
  }, [status])

  useEffect(() => {
    if (status !== 'recording') return

    // if backspacing, do not record typos.
    if (input.length < inputLen) return

    if (input[input.length - 1] != text[input.length - 1]) {
      setStat(stat => ({
        ...stat,
        typos: stat.typos + 1,
      }))
    }

    setInputLen(input.length)
  }, [input, text, status])

  return <div className={TextCheckerCss}>
    {
      letters.map((letter, i) => {
        let status: LetterStatus | undefined

        if (input.length > i) {
          status = input[i] == letter ? LetterStatus.correct : LetterStatus.typo
        } else if (input.length === i) {
          status = LetterStatus.cursor
        }

        return <Letter key={i} status={status}>{letter}</Letter>
      })
    }
  </div>
}

export default TextChecker
