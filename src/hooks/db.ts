import { merge } from 'lodash-es'
import { useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = '_data'

type Db = {
  setting: AppSetting
}

const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
const initialDb: Db = {
  setting: {
    enableNumbers: true,
    enableUpperCase: true,
    enableSymbols: false,
  },
}

export function useDb() {
  const [db, setDb] = useState<Db>(
    merge(initialDb, saved ? JSON.parse(saved) : undefined)
  )

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(db))
  }, [db])

  return {
    db,
    setDb,
  }
}
