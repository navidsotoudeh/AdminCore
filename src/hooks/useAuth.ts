import { useLocalStorage } from './useLocalStorage.tsx'

export function useAuth() {
  const [token] = useLocalStorage('token')
  return { isAuthenticated: !!token }
}
