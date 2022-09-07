import { css } from "@emotion/css";
import { FC, useContext, useMemo } from "react";
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
}

const TextChecker: FC<TextCheckerProps> = ({ text }) => {
  const { theme } = useTheme<KeyKeyTheme>()
  const { input } = useContext(globalContext)

  const letters = [...text]

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
  </div>
}

export default TextChecker
