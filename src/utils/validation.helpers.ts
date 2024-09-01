export const isValidPostalCode = (postalCode: string): boolean => {
  const irZipRegex = /^(?!(\d)\1{3})[13-9]{4}[1346-9][ -]?[013-9]{5}$|^$/g
  return irZipRegex.test(postalCode)
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^\S+@\S+$/i
  return emailRegex.test(email)
}

export const isValidPhoneNumber = (email: string): boolean => {
  const phoneNumberRegex = /^09[01239][0-9]{8}$/
  return phoneNumberRegex.test(email)
}
