import cn from 'clsx'
import React, { LegacyRef, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  hasError?: boolean
  errorText?: string
  label: string
  inputRef?: LegacyRef<HTMLInputElement>
  firstIcon?: React.ReactNode
  secondIcon?: React.ReactNode
  height?: number
  radius?: number
  width?: number
  percent?: boolean
  handleOnFirstIcon?: () => void
  handleOnSecondIcon?: () => void
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    id,
    value,
    label,
    inputRef,
    firstIcon,
    secondIcon,
    radius,
    width,
    percent,
    handleOnFirstIcon,
    handleOnSecondIcon,
    hasError = false,

    ...rest
  } = props

  const rootClassName = cn(
    `bg-white rounded-md relative z-0 flex items-center w-full h-9`,
    className
  )
  const inputClassName = cn(
    {
      'input-root': !hasError,
      'input-root-hasError': hasError,
    },
    'peer',
    {
      'px-8': firstIcon,
      'px-3': !firstIcon,
    }
  )

  return (
    <div className={rootClassName}>
      <input
        style={{
          width: percent ? `${width}%` : `${width}px`,
          borderRadius: `${radius}`,
        }}
        type="text"
        id={id}
        className={inputClassName}
        value={value}
        placeholder=" "
        dir="rtl"
        ref={inputRef}
        {...rest}
      />
      {firstIcon && (
        <div onClick={handleOnFirstIcon} className={`input-firstIcon`}>
          {firstIcon}
        </div>
      )}
      <label
        htmlFor={id}
        className={`input-label px-1 duration-150 peer-placeholder-shown:top-[10px] peer-placeholder-shown:-z-10 peer-placeholder-shown:text-xs peer-placeholder-shown:text-text-normal peer-focus:-top-3 peer-focus:z-50 peer-focus:text-xs peer-focus:text-text-50 ${
          firstIcon ? 'right-6' : 'right-3'
        }`}
      >
        {label}
      </label>
      {secondIcon && (
        <div onClick={handleOnSecondIcon} className={`input-secondIcon`}>
          {secondIcon}
        </div>
      )}
    </div>
  )
}
