import { useEffect } from 'react'
//component
import LoginForm from '../../features/authentication/components/loginForm/LoginForm.tsx'
import LoginDescription from '../../features/authentication/components/loginDescription/LoginDescription.tsx'
import { useLocalStorage } from '@/hooks/useLocalStorage.tsx'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  const [token] = useLocalStorage<string>('token')

  useEffect(() => {
    if (token) {
      navigate('/home', { replace: false })
    }
  }, [navigate])

  return (
    <div className="relative h-screen w-screen overflow-hidden" dir="rtl">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/back.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          id="login"
          className="z-10 flex w-[1200px] items-center gap-2 rounded-lg bg-white bg-opacity-40 backdrop-blur-sm"
        >
          <LoginForm />
          <LoginDescription />
        </div>
      </div>
    </div>
  )
}
export default LoginPage
