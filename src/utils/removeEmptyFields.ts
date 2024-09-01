type NestedObject = Record<string, unknown>

export function removeEmptyFields(obj: NestedObject): NestedObject {
  const cleanedObj: NestedObject = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key]
      if (value !== null && value !== undefined) {
        if (typeof value === 'object') {
          // Recurse into nested objects
          const cleanedValue = removeEmptyFields(value as NestedObject)
          if (Object.keys(cleanedValue).length > 0) {
            cleanedObj[key] = cleanedValue
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

  return cleanedObj
}
