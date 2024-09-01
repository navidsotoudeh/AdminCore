import { ChangeEvent } from 'react'

export const convertInputToNumber = (
  e: ChangeEvent<HTMLInputElement>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void
) => onChange(e.target.value ? Number(e.target.value) : null)
