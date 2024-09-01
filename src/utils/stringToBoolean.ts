export function stringToBoolean(
  value: string | null | undefined
): boolean | undefined {
  if (value === undefined || value === null) {
    return undefined // Return undefined for null or undefined values if needed
  }
  return value.toLowerCase() === 'true'
}
