import { FC, useContext } from 'react'

import appContext from '@/context/app'
import { Icon } from '@/widget/common'

const Item: FC<{
  icon: string
  data: string
  label: string
}> = ({ icon, data, label }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon
        name={icon}
        className="box-content w-36px rounded-full bg-gray-700 p-3"
      ></Icon>

      <div className="flex flex-col">
        <span className="text-24px tracking-widest">{data}</span>
        <div>{label}</div>
      </div>
    </div>
  )
}

const Statistics: FC<{}> = () => {
  const { stat } = useContext(appContext)

  return (
    <div className="flex items-center gap-30">
      <Item
        icon="wind"
        data={stat.speed.toString()}
        label="char/min"
      />
      <Item
        icon="medal"
        data={`${stat.accuracy}%`}
        label="accuracy"
      />
      <Item
        icon="typo"
        data={stat.typos.toString()}
        label="typos"
      />
    </div>
  )
}

export default Statistics
