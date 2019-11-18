const checkAccept = headers => {
  const { accept } = headers
  return accept === 'application/json'
}

const authenticate = headers => {
  const { authentication } = headers
  return authentication === 'Bearer token'
}

module.exports = {
  checkAccept,
  authenticate
}
