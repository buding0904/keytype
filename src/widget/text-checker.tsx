import { css } from "@emotion/css";
import { FC, useContext, useEffect, useMemo, useRef, useState } from "react";
import { KeyKeyTheme, useTheme } from '../theme'

import globalContext from '../context/global'

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
  const { theme } = useTheme<KeyKeyTheme>()

  const statusCss = useMemo(() => {
    switch(status) {
      case LetterStatus.cursor:
        return 'background-color: #5AA3E8;'
      case LetterStatus.correct:
        return `color: ${theme.colors.letterCorrect}`
      case LetterStatus.typo:
        return `color: ${theme.colors.letterTypo}`
    }
    return ''
  }, [status])

  return <span className={css`
    ${statusCss}
  `}>{children}</span>
}

interface TextCheckerProps {
  text: string
  onFinished: () => void
}

const TextChecker: FC<TextCheckerProps> = ({ text, onFinished }) => {
  const { theme } = useTheme<KeyKeyTheme>()

  const { input, setInput } = useContext(globalContext)

  const letters = [...text]
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.addEventListener('blur', () => {
        inputRef.current?.focus()
      })
    }
  }, [inputRef])

  // reset input every time when text changed.
  useEffect(() => {
    setInput('')
  }, [text])

  useEffect(() => {
    if (input.length === text.length) {
      onFinished()
    }
  }, [input, text, onFinished])

  return <div className={css`
    color: ${theme.colors.font};
    font-size: 20px;
    margin: 80px 0px;
    letter-spacing: 0.1rem;
    font-family: 'Code New Roman', sans-serif;
    text-align: center;
  `}>
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
    <form>
      {/* used for disabling form auto submit. */}
      <input type='text' style={{ display: 'none' }}></input>
      <input
        value={input}
        ref={inputRef}
        autoFocus
        // used for disabling any IMEs.
        type="password"
        autoComplete="false"
        maxLength={text.length}
        style={{
          height: 0,
          width: 0,
          border: 'none',
          outline: 'none',
          padding: 0,
        }}
        onKeyDown={e => {
          // prevent cursor change when input arrow keys.
          if (e.code.startsWith('Arrow')) {
            e.preventDefault()
          }
        }}
        onChange={e => setInput(e.target.value)}
      ></input>
    </form>
  </div>
}

export default TextChecker
