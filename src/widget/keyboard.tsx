import { css } from "@emotion/css";
import { FC } from "react";
import Key, { KeyWidth } from "./key";
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'

interface KeyBoardRowProps {
  children?: React.ReactNode
}

const KeyBoardRow: FC<KeyBoardRowProps> = ({ children }) => {
  return <div className={css`
    display: flex;
    justify-content: space-between;
  `}>
    {children}
  </div>
}


interface KeyBoardProps {
}

const KeyBoard: FC<KeyBoardProps> = () => {
  return <div className={css`
    width: 920px;

    & > div:not(:last-child) {
      margin-bottom: 12px;
    }
  `}>
    <KeyBoardRow>
      <Key>`</Key>
      <Key>1</Key>
      <Key>2</Key>
      <Key>3</Key>
      <Key>4</Key>
      <Key>5</Key>
      <Key>6</Key>
      <Key>7</Key>
      <Key>8</Key>
      <Key>9</Key>
      <Key>0</Key>
      <Key>-</Key>
      <Key>=</Key>
      <Key width={KeyWidth.w1} fontSize={12} textPosition="rb">delete</Key>
    </KeyBoardRow>

    <KeyBoardRow>
      <Key width={KeyWidth.w1} fontSize={12} textPosition="lb">tab</Key>
      <Key>Q</Key>
      <Key>W</Key>
      <Key>E</Key>
      <Key>R</Key>
      <Key>T</Key>
      <Key>Y</Key>
      <Key>U</Key>
      <Key>I</Key>
      <Key>O</Key>
      <Key>P</Key>
      <Key>[</Key>
      <Key>]</Key>
      <Key>\</Key>
    </KeyBoardRow>

    <KeyBoardRow>
      <Key width={KeyWidth.w2} fontSize={12} textPosition="lb">caps lock</Key>
      <Key>A</Key>
      <Key>S</Key>
      <Key>D</Key>
      <Key>F</Key>
      <Key>G</Key>
      <Key>H</Key>
      <Key>J</Key>
      <Key>K</Key>
      <Key>L</Key>
      <Key>;</Key>
      <Key>'</Key>
      <Key width={KeyWidth.w2} fontSize={12} textPosition="cr">
        <span style={{ marginBottom: 16 }}>enter</span>
        <span>return</span>
      </Key>
    </KeyBoardRow>

    <KeyBoardRow>
      <Key width={KeyWidth.w3} fontSize={12} textPosition="lb">shift</Key>
      <Key>Z</Key>
      <Key>X</Key>
      <Key>C</Key>
      <Key>V</Key>
      <Key>B</Key>
      <Key>N</Key>
      <Key>M</Key>
      <Key>,</Key>
      <Key>.</Key>
      <Key>/</Key>
      <Key width={KeyWidth.w3} fontSize={12} textPosition="rb">shift</Key>
    </KeyBoardRow>

    <KeyBoardRow>
      <Key fontSize={12} textPosition="lb">fn</Key>
      <Key fontSize={12} textPosition="cb">control</Key>
      <Key fontSize={12} textPosition="cb">option</Key>
      <Key width={KeyWidth.w0} fontSize={12} textPosition="cb">command</Key>
      <Key width={KeyWidth.wSpace}></Key>
      <Key width={KeyWidth.w0} fontSize={12} textPosition="cb">command</Key>
      <Key fontSize={12} textPosition="cb">option</Key>
      <Key fontSize={12}><img width={20} src={ArrowLeft} /></Key>
      <div className={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}>
        <Key height={26} fontSize={12} textPosition='cc' style={{ borderRadius: '4px 4px 0px 0px' }}>
          <img width={20} src={ArrowLeft} style={{ transform: 'rotate(90deg)' }} />
        </Key>
        <Key height={26} fontSize={12} textPosition='cc' style={{ borderRadius: '0px 0px 4px 4px' }}>
          <img width={20} src={ArrowLeft} style={{ transform: 'rotate(-90deg)' }} />
        </Key>
      </div>
      <Key fontSize={12} ><img width={20} src={ArrowRight} /></Key>
    </KeyBoardRow>
  </div>
}

export default KeyBoard
