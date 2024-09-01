export const formatDate = (time?: string | null | Date) =>
  time ? new Date(time)?.toISOString()?.slice(0, 10) : ''

export const formatDateWithHMS = (time?: string | null | Date) => {
  if (time) {
    const date = new Date(time)
    const formattedDate = date.toISOString().slice(0, 10) // Get formatted date part

    // Get formatted time part (hours:minutes:seconds)
    const timeString = date.toLocaleTimeString('en-US', { hour12: false })

    return `${formattedDate} ${timeString}`
  } else {
    return ''
  }
}
