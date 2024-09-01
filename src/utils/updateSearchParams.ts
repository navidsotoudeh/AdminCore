export const updateSearchParams = (
  params: URLSearchParams,
  obj: Record<string, any>
) => {
  // Clear existing parameters for arrays
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      let i = 0
      while (params.has(`${key}[${i}]`)) {
        params.delete(`${key}[${i}]`)
        i++
      }
    }
  })

  // Set new parameters
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      if (Array.isArray(value)) {
        // Handle arrays (e.g., branchIds)
        value.forEach((item, index) => {
          if (item.value !== undefined) {
            params.append(`${key}[${index}]`, item.value.toString())
          }
        })
      } else if (typeof value === 'object') {
        // Handle objects
        if (value.value !== undefined) {
          params.set(key, value.value.toString())
        }
      } else {
        // Handle other types
        params.set(key, value.toString())
      }
    } else {
      params.delete(key)
    }
  })
}
