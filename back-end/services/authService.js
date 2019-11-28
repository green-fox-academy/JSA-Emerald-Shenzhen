const checkAccept = headers => {
  const { accept } = headers
  return accept === 'application/json'
}

const authenticate = headers => {
  const { authentication } = headers
  return authentication === 'Bearer token'
}

const checkContentType = headers => {
  const contentType = headers['content-type']
  return contentType === 'application/json'
}
module.exports = {
  checkAccept,
  authenticate,
  checkContentType
}
