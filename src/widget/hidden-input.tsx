import { FC, useContext, useRef, useEffect } from "react";

import globalContext, { KeyboardStatus } from '../context/global'

const HiddenInput: FC<{ onFinished: () => void }> = ({
  onFinished,
}) => {

  const { text, input, setInput, status } = useContext(globalContext)

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

  return <form>
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
      onChange={e => {
        if (status === KeyboardStatus.recording) {
          setInput(e.target.value)
        }
      }}
    ></input>
  </form>
}

export default HiddenInput
