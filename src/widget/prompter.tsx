import { FC, useContext, useEffect, useRef } from 'react'

import appContext from '@/context/app'

const Prompter: FC<{ text: string }> = ({ text }) => {
  const { input, status } = useContext(appContext)
  const lettersWrapEl = useRef<HTMLDivElement>(null)

  const letters = [...text]

  useEffect(() => {
    const activeLetter = document.querySelector('.active-letter')

    if (activeLetter) {
      activeLetter.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
      })
    }
  }, [input, status])

  useEffect(() => {
    if (lettersWrapEl.current) {
      lettersWrapEl.current?.scrollTo({ left: 0 })
    }
  }, [text])

  return (
    <div
      ref={lettersWrapEl}
      className="my-auto text-2xl tracking-wide select-none whitespace-nowrap max-w-80% overflow-hidden"
    >
      {letters.map((letter, i) => {
        const classList: string[] = []

        if (input.length > i) {
          classList.push(input[i] == letter ? 'text-green' : 'text-red')
        } else if (input.length === i) {
          classList.push('bg-cyan-800 active-letter')
        }

        if (classList.includes('text-red') && letter === ' ') {
          letter = '·'
        }

        return (
          <span
            key={i}
            className={classList.join(' ')}
          >
            {letter}
          </span>
        )
      })}
    </div>
  )
}

export default Prompter
