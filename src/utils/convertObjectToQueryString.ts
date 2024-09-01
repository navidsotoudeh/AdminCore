type QueryParams = {
  [key: string]: any
}

export function convertObjectToQueryString(
  obj: QueryParams,
  parentKey: string = ''
): string {
  return Object.keys(obj)
    .map((key) => {
      const newKey = parentKey ? `${parentKey}` : key
      if (Array.isArray(obj[key])) {
        return obj[key].map((val: string) => `${newKey}=${val}`).join('&')
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        return convertObjectToQueryString(obj[key], newKey)
      } else {
        return `${newKey}=${obj[key]}`
      }
    })
    .join('&')
}
