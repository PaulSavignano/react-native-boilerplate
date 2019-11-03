
export function validatePasswords({ values, errors }) {
  const nextErrors = { ...errors }
  const requiredFields = ['password', 'passwordConfirm']
  console.log('here ', values)
  requiredFields.forEach(field => {
    if (!values[field]) {
      nextErrors[field] = 'Required'
    } else if (values.password !== values.passwordConfirm) {
      const error = 'Passwords must match'
      nextErrors.passwordConfirm = error
      nextErrors.password = error
    } else {
      nextErrors[field] = undefined
    }
  })
  if (values.password !== values.passwordConfirm) {
    nextErrors.passwordConfirm = 'Passwords must match'
  }
  return nextErrors
}

export function validateEmail({ value }) {
  if (!value) return 'Required'
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'invalid email'
  return undefined
}

export function validateRequired({ value }) {
  console.log('here ', value)
  if (!value) return 'Required'
  return undefined
}