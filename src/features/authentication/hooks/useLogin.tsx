import { useState, KeyboardEventHandler, useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { useLocalStorage } from '@/hooks/useLocalStorage.tsx'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
//RTK Query
import {
  useLoginMutation,
  useGetCaptchaQuery,
} from '@/redux/services/authentication/login/loginApi.ts'

type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P]
}

interface FormValues {
  username: string
  password: string
  captcha: string
}
type ReadOnlyFormValues = ReadOnlyProps<FormValues>

const useLogin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<ReadOnlyFormValues>()
  const navigate = useNavigate()
  const handleRefresh = () => {
    const id = uuidv4()
    setSessionKey(id)
    refetch()
  }
  const [login, { isLoading }] = useLoginMutation()
  const {
    data: captchaImage,
    refetch,
    isLoading: captchaIsLoading,
  } = useGetCaptchaQuery()

  const [show, setShow] = useState<boolean>(false)
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [sessionKey, setSessionKey] = useState(uuidv4())
  const [layout, setLayout] = useState('default')
  const [, setToken] = useLocalStorage<string>('token')

  useEffect(() => {
    refetch()
    return () => {}
  }, [])
  const onSubmit = async (data: FormValues) => {
    const { username, password, captcha } = data
    await login({
      username,
      password,
      navigate,
      handleRefresh,
      captcha,
      sessionKey: captchaImage?.sessionKey,
    })
      .unwrap()
      .then((payload) => {
        const { access_token } = payload
        setToken(access_token)
        const params = new URLSearchParams(location.search)
        const returnUrl = params.get('returnUrl')
        setTimeout(() => {
          if (returnUrl) {
            navigate(decodeURIComponent(returnUrl))
          } else {
            navigate('/home')
          }
        }, 50)
      })
      .catch((errorPayload) => {
        toast.error(errorPayload?.data?.error_description ?? 'خطا در ورود')
        refetch()
      })
      .finally(() => setValue('captcha', ''))
  }

  const onKeyDown: KeyboardEventHandler<HTMLFormElement> = (event) => {
    if (event.key === 'Enter') {
      onSubmit
    }
  }

  const keyboard = useRef<any>()
  const onKeyboardChange = (input: string) => {
    setValue('password', input)
  }

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default'
    setLayout(newLayoutName)
  }
  const onKeyPress = (button: any) => {
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{tab}') {
      setShowKeyboard(false)
    }
    if (button === '{shift}' || button === '{lock}') handleShift()
  }

  return {
    handleSubmit,
    control,
    errors,
    Controller,
    isLoading,
    onSubmit,
    sessionKey,
    setSessionKey,
    handleRefresh,
    captchaIsLoading,
    onKeyDown,
    captchaImage,
    setShow,
    show,
    setShowKeyboard,
    showKeyboard,
    layout,
    onKeyboardChange,
    onKeyPress,
    keyboard,
    handleShift,
  }
}

export default useLogin
