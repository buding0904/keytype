import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import appContext, { TypingStatus } from '@/context/app'

type KeyboardContext = {
  isShiftPressed: boolean
  pressedKeyCodes: Set<string>
}

const keyboardCtx = createContext<KeyboardContext>({} as KeyboardContext)

const Key: FC<{
  code?: string
  className?: string
  children?: React.ReactNode
}> = ({ code, children, className }) => {
  const { pressedKeyCodes } = useContext(keyboardCtx)

  const classList = useMemo<string[]>(() => {
    const list = [
      'h-72px border border-gray-500 rounded-md py-1 px-2 transition-all duration-300',
    ]

    if (className) {
      list.push(className)
    }

    if (code && pressedKeyCodes.has(code)) {
      list.push('bg-gray-600')
    }

    return list
  }, [pressedKeyCodes, code, className])

  return <div className={classList.join(' ')}>{children}</div>
}

const LetterKey: FC<{
  code: string
  children?: React.ReactNode
}> = ({ code, children }) => {
  return (
    <Key
      code={code}
      className={`${
        code === 'Space' ? 'w-360px' : 'w-72px'
      } key-center text-16px`}
    >
      {children}
    </Key>
  )
}

const FunctionKey: FC<{
  code?: string
  className: string
  children?: React.ReactNode
}> = ({ code, className, children }) => {
  const classList: string[] = [className]

  return (
    <Key
      code={code}
      className={`text-14px ${classList.join(' ')}`}
    >
      {children}
    </Key>
  )
}

const KeyBoardRow: FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  let finalClassName = 'flex items-center justify-center gap-2'

  if (className) {
    finalClassName += ` ${className}`
  }
  return <div className={finalClassName}>{children}</div>
}

const CommonKeyBoardRows: FC = () => {
  const { isShiftPressed } = useContext(keyboardCtx)

  return (
    <>
      <KeyBoardRow>
        <LetterKey code="Backquote">{isShiftPressed ? '~' : '`'}</LetterKey>
        <LetterKey code="Digit1">{isShiftPressed ? '!' : '1'}</LetterKey>
        <LetterKey code="Digit2">{isShiftPressed ? '@' : '2'}</LetterKey>
        <LetterKey code="Digit2">{isShiftPressed ? '#' : '3'}</LetterKey>
        <LetterKey code="Digit4">{isShiftPressed ? '$' : '4'}</LetterKey>
        <LetterKey code="Digit5">{isShiftPressed ? '%' : '5'}</LetterKey>
        <LetterKey code="Digit6">{isShiftPressed ? '^' : '6'}</LetterKey>
        <LetterKey code="Digit7">{isShiftPressed ? '&' : '7'}</LetterKey>
        <LetterKey code="Digit8">{isShiftPressed ? '*' : '8'}</LetterKey>
        <LetterKey code="Digit9">{isShiftPressed ? '(' : '9'}</LetterKey>
        <LetterKey code="Digit0">{isShiftPressed ? ')' : '0'}</LetterKey>
        <LetterKey code="Minus">{isShiftPressed ? '_' : '-'}</LetterKey>
        <LetterKey code="Equal">{isShiftPressed ? '+' : '='}</LetterKey>
        <FunctionKey
          code="Backspace"
          className="flex-1 key-rb"
        >
          delete
        </FunctionKey>
      </KeyBoardRow>

      <KeyBoardRow>
        <FunctionKey className="flex-1 key-lb key-disabled">tab</FunctionKey>
        <LetterKey code="KeyQ">Q</LetterKey>
        <LetterKey code="KeyW">W</LetterKey>
        <LetterKey code="KeyE">E</LetterKey>
        <LetterKey code="KeyR">R</LetterKey>
        <LetterKey code="KeyT">T</LetterKey>
        <LetterKey code="KeyY">Y</LetterKey>
        <LetterKey code="KeyU">U</LetterKey>
        <LetterKey code="KeyI">I</LetterKey>
        <LetterKey code="KeyO">O</LetterKey>
        <LetterKey code="KeyP">P</LetterKey>
        <LetterKey code="BracketLeft">{isShiftPressed ? '{' : '['}</LetterKey>
        <LetterKey code="BracketRight">{isShiftPressed ? '}' : ']'}</LetterKey>
        <LetterKey code="Backslash">{isShiftPressed ? '|' : '\\'}</LetterKey>
      </KeyBoardRow>
      <KeyBoardRow>
        <FunctionKey className="flex-1 key-lb key-disabled">
          caps lock
        </FunctionKey>
        <LetterKey code="KeyA">A</LetterKey>
        <LetterKey code="KeyS">S</LetterKey>
        <LetterKey code="KeyD">D</LetterKey>
        <LetterKey code="KeyF">F</LetterKey>
        <LetterKey code="KeyG">G</LetterKey>
        <LetterKey code="KeyH">H</LetterKey>
        <LetterKey code="KeyJ">J</LetterKey>
        <LetterKey code="KeyK">K</LetterKey>
        <LetterKey code="KeyL">L</LetterKey>
        <LetterKey code="Semicolon">{isShiftPressed ? ':' : ';'}</LetterKey>
        <LetterKey code="Quote">{isShiftPressed ? '"' : "'"}</LetterKey>
        <FunctionKey
          code="Enter"
          className="flex-1 key-rb"
        >
          enter
        </FunctionKey>
      </KeyBoardRow>

      <KeyBoardRow>
        <FunctionKey
          code="ShiftLeft"
          className="flex-1 key-lb"
        >
          shift
        </FunctionKey>
        <LetterKey code="KeyZ">Z</LetterKey>
        <LetterKey code="KeyX">X</LetterKey>
        <LetterKey code="KeyC">C</LetterKey>
        <LetterKey code="KeyV">V</LetterKey>
        <LetterKey code="KeyB">B</LetterKey>
        <LetterKey code="KeyN">N</LetterKey>
        <LetterKey code="KeyM">M</LetterKey>
        <LetterKey code="Comma">{isShiftPressed ? '<' : ','}</LetterKey>
        <LetterKey code="Period">{isShiftPressed ? '>' : '.'}</LetterKey>
        <LetterKey code="Slash">{isShiftPressed ? '?' : '/'}</LetterKey>
        <FunctionKey
          code="ShiftRight"
          className="flex-1 key-rb"
        >
          shift
        </FunctionKey>
      </KeyBoardRow>
    </>
  )
}

export const MacKeyBoard: FC = () => {
  return (
    <>
      <CommonKeyBoardRows />

      <KeyBoardRow className="mx-auto">
        <FunctionKey className="w-72px key-lb key-disabled">fn</FunctionKey>
        <FunctionKey className="w-72px key-lb key-disabled">ctrl</FunctionKey>
        <FunctionKey className="w-72px key-lb key-disabled">option</FunctionKey>
        <FunctionKey className="w-84px key-lb key-disabled">
          command
        </FunctionKey>
        <LetterKey code="Space"></LetterKey>
        <FunctionKey className="w-84px key-rb key-disabled">
          command
        </FunctionKey>
        <FunctionKey className="w-72px key-rb key-disabled">option</FunctionKey>
        <FunctionKey className="w-72px key-rb key-disabled">ctrl</FunctionKey>
        <FunctionKey className="w-72px key-rb key-disabled">fn</FunctionKey>
      </KeyBoardRow>
    </>
  )
}

export const WinKeyBoard: FC<{}> = () => {
  return (
    <>
      <CommonKeyBoardRows />

      <KeyBoardRow className="mx-auto">
        <FunctionKey className="w-72px key-lb key-disabled">ctrl</FunctionKey>
        <FunctionKey className="w-84px key-lb key-disabled">win</FunctionKey>
        <FunctionKey className="w-72px key-lb key-disabled">alt</FunctionKey>
        <LetterKey code="Space"></LetterKey>
        <FunctionKey className="w-72px key-rb key-disabled">alt</FunctionKey>
        <FunctionKey className="w-84px key-rb key-disabled">win</FunctionKey>
        <FunctionKey className="w-72px key-rb key-disabled">ctrl</FunctionKey>
      </KeyBoardRow>
    </>
  )
}

export const KeyBoard: FC = () => {
  const { text, putInput, popInput, status, setStatus, refresh } =
    useContext(appContext)

  const [isShiftPressed, setIsShiftPressed] = useState(false)
  const [pressedKeyCodes, setPressedKeyCodes] = useState<Set<string>>(new Set())

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.code === 'Enter' && status === TypingStatus.end) {
        refresh()
      } else if (e.key === text[0] && status === TypingStatus.ready) {
        setStatus(TypingStatus.recording)
      } else if (status !== TypingStatus.recording) {
        return
      }

      setIsShiftPressed(e.shiftKey)
      setPressedKeyCodes(codes => {
        codes.add(e.code)

        return new Set(codes)
      })

      if (e.code === 'Backspace') {
        popInput()
      } else if (e.key.length === 1) {
        putInput(e.key)
      }
    }

    window.addEventListener('keydown', onKeydown)

    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [status, text])

  useEffect(() => {
    function onKeyup(e: KeyboardEvent) {
      if (isShiftPressed && e.key === 'Shift') {
        setIsShiftPressed(false)
      }

      setPressedKeyCodes(codes => {
        codes.delete(e.code)

        return new Set(codes)
      })
    }

    window.addEventListener('keyup', onKeyup)

    return () => {
      window.removeEventListener('keyup', onKeyup)
    }
  }, [isShiftPressed])

  return (
    <div className="mt-atuo">
      <div className="text-gray-600 text-center h-24px mb-4">
        {status === TypingStatus.ready && <>按下文本的第一个字母开始</>}
        {status === TypingStatus.end && <>按下回车开始下一段打字</>}
      </div>

      <keyboardCtx.Provider
        value={{
          isShiftPressed,
          pressedKeyCodes,
        }}
      >
        <div className="w-1150px flex flex-col gap-2">
          {_isWindows ? <WinKeyBoard /> : <MacKeyBoard />}
        </div>
      </keyboardCtx.Provider>
    </div>
  )
}
