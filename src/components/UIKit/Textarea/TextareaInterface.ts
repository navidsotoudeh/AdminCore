import React from 'react'

export interface TextareaInterface {
  /**
   * Type of the props of button ui component
   */
  id?: number | string
  className?: string
  label?: string
  labelClassName?: string
  inputClassName?: string
  name: string
  placeholder?: string
  helperText?: string
  rows?: number
  inputMode?:
    | 'url'
    | 'decimal'
    | 'email'
    | 'numeric'
    | 'search'
    | 'tel'
    | 'text'
    | 'none'
  value?: string | number
  required?: boolean
  hasError?: boolean
  isOpen?: boolean
  errorText?: string
  disable?: boolean
  type?: string
  direction?: 'rtl' | 'ltr'
  readonly?: boolean
  autoFocus?: boolean
  isConvertPersianNumberToEnglishNumber?: boolean
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  pressKey?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onClick?: () => void
  width?: string
  autoComplete?: string
  errorClassName?: string
  useHook?: boolean
  onlyLabelError?: boolean
  hasAction?: boolean
  isLabelOnBorder?: boolean
  helperIconPosition?: string
  hasFocus?: boolean
  hasBlur?: boolean
  helperIconClassName?: string
  isInputDirty?: boolean
}
