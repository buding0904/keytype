import { FC } from "react";
import { css } from '@emotion/css'
import { KeyKeyTheme, useTheme } from '../theme'

interface KeyProps {
  name: string
}

const Key: FC<KeyProps> = ({ name }) => {
  const { theme } = useTheme<KeyKeyTheme>()

  return <div className={css`
    border: 1px solid ${theme.colors.keyBorder};
    height: 44px;
    width: 44px;
    border-radius: 4px;
  `}>
    {name}
  </div>
}

export default Key
