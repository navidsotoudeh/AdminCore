import React from 'react'
import { Text } from '../Text/Text.tsx'
import cn from 'clsx'
import { LookupInputSize } from '../sizes.ts'

export const Textarea = ({
  value,
  onChange,
  rows,
  placeholder = 'name',
  id = 'name',
  label = 'name',
  className,
  textareaSize = 'large',
  maxLength,
  labelClassName = 'w-1/4',
  ...rest
}: {
  id?: string
  type?: string
  isOpen?: boolean
  isEnabled?: boolean
  autoFocus?: boolean
  hasError?: boolean
  placeholder?: string
  label?: string
  className?: string
  rows?: number
  value: string | number
  maxLength?: number
  textareaSize?: 'small' | 'medium' | 'large'
  labelClassName?: string
  children?: React.ReactNode
  inputRef?: React.Ref<HTMLInputElement>
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  pressKey?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  blurHandler?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
}) => {
  return (
    <div className="flex w-full items-center justify-between" dir="rtl">
      <label htmlFor={id} className={`flex justify-start ${labelClassName}`}>
        <Text variant="body3">{label}</Text>
      </label>
      <div className="relative flex w-full">
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          className={cn(
            LookupInputSize[textareaSize],
            'w-full rounded-md border-[1px] border-border pr-2 font-mainFa text-sm focus:border-[1px] focus:border-secondary-60 focus:outline-none',
            className
          )}
          placeholder={placeholder}
          rows={rows}
          {...rest}
          maxLength={maxLength}
        />
      </div>
    </div>
  )
}
