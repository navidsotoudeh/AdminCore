import { ButtonHTMLAttributes, ReactNode } from 'react'
import { colors } from '..'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string
  disabled?: boolean
  disableElevation?: boolean
  disableRipple?: boolean
  loading?: boolean
  fullWidth?: boolean
  color?: colors
  size?: 'small' | 'medium' | 'large'
  variant?: 'text' | 'outlined' | 'contained'
  children?: ReactNode | string
  endIcon?: ReactNode | string
  endIconSeparator?: boolean
  startIcon?: ReactNode | string
  className?: string
}

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  id?: string
  disabled?: boolean
  disableRipple?: boolean
  outline?: boolean
  color?: colors
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode | string
  className?: string
}
