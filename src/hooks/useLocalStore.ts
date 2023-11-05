import { useEffect, useState } from "react"

function getStorageValue<T>(key: string, defaultValue: T | string): T | unknown {
  const saved = localStorage.getItem(key)
  const initial: unknown = JSON.parse(saved!)
  return initial || defaultValue
}

export const useLocalStorage = <T>(key: string, defaultValue?: T) => {
  const [value, setValue] = useState<T | unknown>(() => {
    if(defaultValue) {
      return getStorageValue<T>(key, defaultValue)
    }
  })

  useEffect(() => {
    if(value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value as T, setValue] as const
}
