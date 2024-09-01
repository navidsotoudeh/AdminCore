import moment from 'moment'
export const FormatNum = (value: number | null) => {
  if (value === null || isNaN(value)) return ''
  const formattedNumber = new Intl.NumberFormat('en-us').format(Math.abs(value))
  return value < 0 ? `(${formattedNumber})` : formattedNumber
}
export const convertToIsoFormat = (value: string) => {
  const dateObject = new Date(value)
  return moment(dateObject).toISOString()
}
