export function removeEmptyFieldsAndEmptySelect(obj: any): any {
  // Handle arrays
  if (Array.isArray(obj)) {
    const cleanedArray = obj
      .map((item) => removeEmptyFieldsAndEmptySelect(item))
      .filter((item) => item !== undefined && item !== null)
    return cleanedArray.length > 0 ? cleanedArray : undefined
  }

  // Handle non-object types
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const cleanedObj: NestedObject = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      if (value !== null && value !== undefined && value !== '') {
        if (typeof value === 'object') {
          if ('label' in value && 'value' in value) {
            if (
              value.value !== null &&
              value.value !== undefined &&
              value.value !== ''
            ) {
              cleanedObj[key] = { eq: value.value }
            }
          } else {
            const cleanedValue = removeEmptyFieldsAndEmptySelect(value)
            if (
              cleanedValue !== undefined &&
              (Object.keys(cleanedValue).length > 0 ||
                value instanceof Date ||
                Array.isArray(cleanedValue))
            ) {
              cleanedObj[key] = cleanedValue
            }
          }
        } else if (typeof value === 'number' && !isNaN(value)) {
          cleanedObj[key] = value
        } else if (typeof value === 'string' && value.trim() !== '') {
          cleanedObj[key] = value
        } else if (typeof value === 'boolean') {
          cleanedObj[key] = value
        }
      }
    }
  }

  return Object.keys(cleanedObj).length > 0 ? cleanedObj : undefined
}
type NestedObject = { [key: string]: any }
