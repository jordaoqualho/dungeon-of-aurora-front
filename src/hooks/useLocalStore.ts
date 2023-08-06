import { useEffect, useState } from "react"

function getStorageValue<T>(key: string, defaultValue: T | string): T | unknown {
  const saved = localStorage.getItem(key)
  const initial: unknown = JSON.parse(saved!)
  return initial || defaultValue
}

export const useLocalStorage = <T>(key: string, defaultValue: T | string = "") => {
  const [value, setValue] = useState<T | unknown>(() => {
    return getStorageValue<T>(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
