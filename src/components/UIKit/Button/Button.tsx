import cn from 'clsx'
import { ClipLoader } from 'react-spinners'
import React, { ButtonHTMLAttributes, LegacyRef } from 'react'
import { Text } from '../index.ts'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  variant?: 'info' | 'success' | 'error' | 'default'
  size: 'large' | 'medium'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  buttonRef?: LegacyRef<HTMLButtonElement>
  width?: string | number
  height?: string | number
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  label?: string | React.ReactNode
  loading?: boolean
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    variant = 'info',
    size,
    startIcon,
    endIcon,
    active,
    loading = false,
    disabled = false,
    buttonRef,
    children,
    type,
    ...rest
  } = props

  const rootClassName = cn(
    `btn-root`,
    `btn-${variant}`,
    `btn-${size}`,
    className
  )
  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      ref={buttonRef}
      type={type}
      {...rest}
    >
      {startIcon && <span className={'-ml-1 pr-1'}> {startIcon}</span>}
      {!loading && <Text variant="body2">{children}</Text>}
      {loading && <ClipLoader size={30} color="#f5f5f5" />}
      {endIcon && <span className="mr-1 pl-1"> {endIcon}</span>}
    </button>
  )
}
