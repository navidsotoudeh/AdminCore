import { useCallback, useEffect, useState } from 'react'

type ReturnType<T> = [
  T | T[] | undefined,
  React.Dispatch<React.SetStateAction<T | T[] | undefined>>,
  (value: T) => void,
]

export const useLocalStorage = <T,>(
  key: string,
  initialValue?: T | T[]
): ReturnType<T> => {
  const [state, setState] = useState<T | T[] | undefined>(() => {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : initialValue ?? undefined
    } catch (err) {
      console.error(err)
    }
    return initialValue
  })

  const addLocalStorage = useCallback((value: T) => {
    setState((prev) => {
      if (prev === null || prev === undefined) {
        return value
      }
      if (Array.isArray(prev)) {
        return [...prev, value]
      }
      return [prev, value] as T[]
    })
  }, [])

  useEffect(() => {
    try {
      if (state !== undefined && state !== null) {
        localStorage.setItem(key, JSON.stringify(state))
      } else {
        localStorage.removeItem(key)
      }
    } catch (err) {
      console.error(err)
    }
  }, [key, state])

  return [state, setState, addLocalStorage]
}
