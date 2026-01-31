function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(text = '') {
  return text.replace(/[<>]/g, '').trim()
}

export { isValidEmail, sanitize }
