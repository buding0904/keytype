import { FC, useEffect, useState } from 'react'

import { Button, Popover, Divider, Switch } from '@arco-design/web-react'
import { IconSettings } from '@arco-design/web-react/icon'
import { useDb } from '@/hooks/db'

export const Header: FC = () => {
  const { db, setDb } = useDb()
  const [setting, setSetting] = useState(db.setting)

  const onUpperCaseEnableChange = (val: boolean) => {
    setSetting(setting => {
      return {
        ...setting,
        enableUpperCase: val,
      }
    })
  }
  const onNumbersEnableChange = (val: boolean) => {
    setSetting(setting => {
      return {
        ...setting,
        enableNumbers: val,
      }
    })
  }
  const onSymbolsEnableChange = (val: boolean) => {
    setSetting(setting => {
      return {
        ...setting,
        enableSymbols: val,
      }
    })
  }

  useEffect(() => {
    setDb(db => {
      return {
        ...db,
        setting,
      }
    })
  }, [setting])

  return (
    <div className="flex gap-4 items-center absolute right-0 top-0 px-10vw py-4">
      <Popover
        trigger="click"
        content={
          <div className="flex flex-col">
            <div className="flex items-center justify-between gap-4">
              生成大写字母
              <Switch
                checked={setting.enableUpperCase}
                size="small"
                onChange={onUpperCaseEnableChange}
              />
            </div>
            <Divider className="!my-2" />
            <div className="flex items-center justify-between gap-4">
              生成数字
              <Switch
                checked={setting.enableNumbers}
                size="small"
                onChange={onNumbersEnableChange}
              />
            </div>
            <Divider className="!my-2" />
            <div className="flex items-center justify-between gap-4">
              生成符号
              <Switch
                checked={setting.enableSymbols}
                size="small"
                onChange={onSymbolsEnableChange}
              />
            </div>
          </div>
        }
      >
        <Button
          size="small"
          className="!px-2 !flex items-center"
        >
          <IconSettings className="text-20px" />
        </Button>
      </Popover>
    </div>
  )
}
