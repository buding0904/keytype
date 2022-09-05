import { css } from "@emotion/css";
import { FC } from "react";
import Key from "./key";

interface KeyBoardRowProps {
  children: ReactChildren
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
    max-width: 800px;
  `}>
    <KeyBoardRow>
      <Key name="`" />
      <Key name="1" />
      <Key name="2" />
      <Key name="3" />
      <Key name="4" />
      <Key name="5" />
      <Key name="6" />
      <Key name="7" />
      <Key name="8" />
      <Key name="9" />
      <Key name="0" />
      <Key name="-" />
      <Key name="=" />
      <Key name="delete" />
    </KeyBoardRow>
  </div>
}

export default KeyBoard
