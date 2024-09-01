export const new_updateSearchParams = (
  existingParams: URLSearchParams,
  obj: Record<string, any>
): URLSearchParams => {
  const params = new URLSearchParams(existingParams)

  // Get all keys from both existingParams and obj
  const allKeys = new Set([...params.keys(), ...Object.keys(obj)])

  allKeys.forEach((key) => {
    const baseKey = key.split('[')[0]
    if (Object.prototype.hasOwnProperty.call(obj, baseKey)) {
      // If the key exists in obj, update or delete based on new value
      const value = obj[baseKey]
      if (value !== null && value !== undefined && value !== '') {
        if (Array.isArray(value)) {
          // Handle arrays
          params.delete(baseKey) // Remove any existing non-array parameter
          value.forEach((item, index) => {
            if (item.value !== undefined) {
              params.set(`${baseKey}[${index}]`, item.value.toString())
            }
          })
        } else if (typeof value === 'object') {
          // Handle objects
          if (value.value !== undefined) {
            params.set(baseKey, value.value.toString())
          } else {
            params.delete(baseKey)
          }
        } else {
          // Handle other types
          params.set(baseKey, value.toString())
        }
      } else {
        // Delete all related parameters if the new value is null/undefined/empty
        params.delete(baseKey)
        let i = 0
        while (params.has(`${baseKey}[${i}]`)) {
          params.delete(`${baseKey}[${i}]`)
          i++
        }
      }
    }
    // If the key doesn't exist in obj, leave it unchanged in params
  })

  return params
}
