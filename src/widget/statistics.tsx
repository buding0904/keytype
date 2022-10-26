import { FC, useContext, useMemo } from "react"
import { css } from "@emotion/css"

import WindSvg from '../assets/wind.svg'
import MedalSvg from '../assets/medal.svg'
import TypoSvg from '../assets/typo.svg'
import { SpaceBox } from "./common"

import globalContext from '../context/global'

interface ItemProps {
  icon: string
  data: number
  label: string
  isPercent?: boolean
}

const Item: FC<ItemProps> = ({
  icon,
  data,
  label,
  isPercent = false,
}) => {
  return <div className="f a-c">
    <div className={css`
      width: 60px;
      height: 60px;
      background-color: #414044;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `}>
      <img src={icon} height={30}></img>
    </div>
    <div className={css`
      color: white;
      margin-left: 16px;
    `}>
      <div>
        <span className={css`
          font-size: 44px;
        `}>{data}</span>
        { isPercent && <span className={css`font-size: 14px; margin-left: 4px;`}>%</span> }
      </div>
      <div className={css`
        color: #9B9C9A;
        font-size: 12px;
      `}>{label}</div>
    </div>
  </div>
}

const Statistics: FC<{}> = () => {
  const { stat, input, durationTimer } = useContext(globalContext)

  const speed = useMemo(() => {
    if (durationTimer.duration == 0) return 0
    return Math.floor(input.length / durationTimer.duration * 60)
  }, [durationTimer.duration])

  return <div className="f">
    <Item icon={WindSvg} data={speed} label="char/min" />
    <SpaceBox width={120} />
    <Item icon={MedalSvg} data={stat.accuracy} label="accuracy" isPercent />
    <SpaceBox width={120} />
    <Item icon={TypoSvg} data={stat.typos} label="typos" />
  </div>
}

export default Statistics
