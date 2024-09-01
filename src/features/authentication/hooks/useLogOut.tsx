//lib
import { Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

//RT Query
import { useLogoutMutation } from '@/redux/services/authentication/login/loginApi.ts'
import { useLocalStorage } from '@/hooks/useLocalStorage.tsx'
const useLogOut = () => {
  const [logOut, { isLoading }] = useLogoutMutation()
  const [, setToken] = useLocalStorage<string | null>('token')

  const navigate = useNavigate()
  const handleOnLogOut = () => {
    // Store the current path as the return URL
    const returnUrl = encodeURIComponent(location.pathname + location.search)
    setToken(null)
    logOut()
    setTimeout(() => {
      // Navigate to the login page with the return URL as a query parameter
      navigate(`/?returnUrl=${returnUrl}`)
    }, 200)
  }

  return {
    Controller,
    isLoading,
    handleOnLogOut,
  }
}

export default useLogOut
