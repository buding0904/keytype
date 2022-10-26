import { css } from "@emotion/css";
import { FC, useContext } from "react";
import Key, { KeyWidth } from "./key";
import { isWindows } from '../utils'
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'

import globalContext, { KeyboardStatus } from '../context/global'

const KeyboardCss = css`
  width: 920px;

  & > div:not(:last-child) {
    margin-bottom: 12px;
  }
`

interface KeyBoardRowProps {
  children?: React.ReactNode
}

const KeyBoardRow: FC<KeyBoardRowProps> = ({ children }) => {
  return <div className="f j-sb">
    {children}
  </div>
}

export const MacKeyBoard: FC<{}> = () => {
  const { status } = useContext(globalContext)

  return <div className={KeyboardCss}>
    <KeyBoardRow>
      <Key code="Backquote">`</Key>
      <Key code="Digit1">1</Key>
      <Key code="Digit2">2</Key>
      <Key code="Digit2">3</Key>
      <Key code="Digit4">4</Key>
      <Key code="Digit5">5</Key>
      <Key code="Digit6">6</Key>
      <Key code="Digit7">7</Key>
      <Key code="Digit8">8</Key>
      <Key code="Digit9">9</Key>
      <Key code="Digit0">0</Key>
      <Key code="Minus">-</Key>
      <Key code="Equal">=</Key>
      <Key code="Backspace" width={KeyWidth.w1} fontSize={12} textPosition="rb">backspace</Key>
    </KeyBoardRow>

    <KeyBoardRow>
      <Key code="Tab" width={KeyWidth.w1} fontSize={12} textPosition="lb">tab</Key>
      <Key code="KeyQ">Q</Key>
      <Key code="KeyW">W</Key>
      <Key code="KeyE">E</Key>
      <Key code="KeyR">R</Key>
      <Key code="KeyT">T</Key>
      <Key code="KeyY">Y</Key>
      <Key code="KeyU">U</Key>
      <Key code="KeyI">I</Key>
      <Key code="KeyO">O</Key>
      <Key code="KeyP">P</Key>
      <Key code="BracketLeft">[</Key>
      <Key code="BracketRight">]</Key>
      <Key code="Backslash">\</Key>
    </KeyBoardRow>

    <KeyBoardRow>
      <Key code="CapsLock" width={KeyWidth.w2} fontSize={12} textPosition="lb">caps lock</Key>
      <Key code="KeyA">A</Key>
      <Key code="KeyS">S</Key>
      <Key code="KeyD">D</Key>
      <Key code="KeyF">F</Key>
      <Key code="KeyG">G</Key>
      <Key code="KeyH">H</Key>
      <Key code="KeyJ">J</Key>
      <Key code="KeyK">K</Key>
      <Key code="KeyL">L</Key>
      <Key code="Semicolon">;</Key>
      <Key code="Quote">'</Key>
      <Key hint={status === KeyboardStatus.ready} code="Enter" width={KeyWidth.w2} fontSize={12} textPosition="cr">
        <span style={{ marginBottom: 16 }}>enter</span>
        <span>return</span>
      </Key>
    </KeyBoardRow>

    <KeyBoardRow>
      <Key code="ShiftLeft" width={KeyWidth.w3} fontSize={12} textPosition="lb">shift</Key>
      <Key code="KeyZ">Z</Key>
      <Key code="KeyX">X</Key>
      <Key code="KeyC">C</Key>
      <Key code="KeyV">V</Key>
      <Key code="KeyB">B</Key>
      <Key code="KeyN">N</Key>
      <Key code="KeyM">M</Key>
      <Key code="Comma">,</Key>
      <Key code="Period">.</Key>
      <Key code="Slash">/</Key>
      <Key code="ShiftRight" width={KeyWidth.w3} fontSize={12} textPosition="rb">shift</Key>
    </KeyBoardRow>

    <KeyBoardRow>
      {
        isWindows ? (
          <>
            <Key code="ControlLeft" fontSize={12} textPosition="cb">ctrl</Key>
            <Key code="MetaLeft" width={KeyWidth.w0} fontSize={12} textPosition="cb">win</Key>
            <Key code="AltLeft" fontSize={12} textPosition="cb">alt</Key>
          </>
        ) : (
          <>
            <Key code="Fn" fontSize={12} textPosition="lb">fn</Key>
            <Key code="ControlLeft" fontSize={12} textPosition="cb">control</Key>
            <Key code="AltLeft" fontSize={12} textPosition="cb">option</Key>
            <Key code="MetaLeft" width={KeyWidth.w0} fontSize={12} textPosition="cb">command</Key>
          </>
        )
      }
      <Key code="Space" width={KeyWidth.wSpace}></Key>
      {
        isWindows ? (
          <>
            <Key code="AltRight" fontSize={12} textPosition="cb">alt</Key>
            <Key code="Fn" fontSize={12} textPosition="cb">fn</Key>
            <Key code="ControlRight" fontSize={12} textPosition="cb">ctrl</Key>
          </>
        ) : (
          <>
            <Key code="MetaRight" width={KeyWidth.w0} fontSize={12} textPosition="cb">command</Key>
            <Key code="AltRight" fontSize={12} textPosition="cb">{isWindows ? 'alt' : 'option'}</Key>
          </>
        )
      }

      <Key code="ArrowLeft" fontSize={12}><img width={20} src={ArrowLeft} /></Key>
      <div className="f-col j-sb">
        <Key code="ArrowUp" height={26} fontSize={12} textPosition='cc' style={{ borderRadius: '4px 4px 0px 0px' }}>
          <img width={20} src={ArrowLeft} style={{ transform: 'rotate(90deg)' }} />
        </Key>
        <Key code="ArrowDown" height={26} fontSize={12} textPosition='cc' style={{ borderRadius: '0px 0px 4px 4px' }}>
          <img width={20} src={ArrowLeft} style={{ transform: 'rotate(-90deg)' }} />
        </Key>
      </div>
      <Key code="ArrowRight" fontSize={12} ><img width={20} src={ArrowRight} /></Key>
    </KeyBoardRow>
  </div>
}
