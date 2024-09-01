import { HiEye, HiMiniEyeSlash, HiMiniUserCircle } from 'react-icons/hi2'
import { BiRefresh } from 'react-icons/bi'
import { FaKeyboard } from 'react-icons/fa'
import Keyboard from 'react-simple-keyboard'
import { DotLoader } from 'react-spinners'
import 'react-simple-keyboard/build/css/index.css'
//component
import Logo from '../../../../assets/images/footer_logo.png'
import { Input, Button, Text } from '@components/UIKit'
import useLogin from '../../hooks/useLogin.tsx'
function LoginForm() {
  const {
    handleSubmit,
    control,
    errors,
    Controller,
    isLoading,
    onSubmit,
    handleRefresh,
    onKeyDown,
    captchaImage,
    setShow,
    show,
    setShowKeyboard,
    showKeyboard,
    captchaIsLoading,
    layout,
    onKeyboardChange,
    onKeyPress,
    keyboard,
  } = useLogin()

  return (
    <div
      className="flex w-1/2 flex-col items-center justify-center gap-12 rounded-lg p-4"
      dir="rtl"
    >
      <img src={Logo} alt="logo" style={{ width: '150px', height: '100px' }} />
      <form
        className="flex w-full flex-col items-center gap-9 rounded-lg px-4 py-12"
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={onKeyDown}
      >
        <div className="flex h-11 w-[300px] flex-col items-end justify-between">
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: 'نام کاربری اجباری است',
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="نام کاربری"
                label="نام کاربری"
                value={value}
                onChange={onChange}
                hasError={!!errors.username}
                secondIcon={
                  <HiMiniUserCircle className="cursor-pointer" size={20} />
                }
              />
            )}
          />
          {!!errors.username && (
            <Text variant="label" className="text-red-active">
              {errors?.username?.message}
            </Text>
          )}
        </div>
        <div className="flex h-11 w-[300px] flex-col items-end">
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: 'کلمه عبور اجباری است',
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="کلمه‌ عبور"
                autoComplete="off"
                type={show ? 'text' : 'password'}
                label="کلمه‌ عبور"
                value={value}
                onChange={onChange}
                hasError={!!errors.password}
                secondIcon={
                  <div className="flex items-center gap-2">
                    <FaKeyboard
                      className="cursor-pointer"
                      onClick={() => setShowKeyboard((prevState) => !prevState)}
                    />
                    {show ? (
                      <HiEye
                        className="cursor-pointer hover:text-black"
                        onClick={() => setShow(false)}
                      />
                    ) : (
                      <HiMiniEyeSlash
                        className="cursor-pointer hover:text-black"
                        onClick={() => setShow(true)}
                      />
                    )}
                  </div>
                }
              />
            )}
          />
          {!!errors.password && (
            <Text variant="label" className="text-red-active">
              {errors?.password?.message}
            </Text>
          )}
          {showKeyboard && (
            <div className="absolute bottom-4 z-40">
              <Keyboard
                keyboardRef={(r) => {
                  if (keyboard.current !== undefined) {
                    keyboard.current = r
                  }
                }}
                layoutName={layout}
                onChange={onKeyboardChange}
                onKeyPress={onKeyPress}
              />
            </div>
          )}
        </div>

        <div className="relative flex h-11 w-[300px] flex-col items-end gap-2">
          <Controller
            name="captcha"
            control={control}
            defaultValue=""
            rules={{
              required: 'کد امنیتی اجباری است',
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                name="captcha"
                type="text"
                label="کد امنیتی"
                placeholder="کد امنیتی"
                value={value}
                onChange={onChange}
                hasError={!!errors.captcha}
                secondIcon={
                  <BiRefresh
                    className="cursor-pointer"
                    size={22}
                    onClick={handleRefresh}
                  />
                }
              />
            )}
          />
          {!!errors.captcha && (
            <Text variant="label" className="text-red-active">
              {errors?.captcha?.message}
            </Text>
          )}
          {captchaIsLoading ? (
            <DotLoader size={22} color="orange" className="mt-4" />
          ) : (
            <img
              src={`data:image/png;base64,${captchaImage?.file}`}
              alt="Captcha"
              style={{
                width: '80px',
                height: '40px',
                marginRight: '150px',
                minHeight: '30px',
              }}
            />
          )}
        </div>
        <Button
          size="medium"
          variant="info"
          className="mt-[40px] w-1/2"
          onClick={handleSubmit((d) => onSubmit(d))}
          loading={isLoading}
        >
          ورود
        </Button>
      </form>
    </div>
  )
}
export default LoginForm
