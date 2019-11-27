const { authenticate } = require('../services/authService')
const ERROR = require('../helpers/errors')

const auth = (req, res, next) => {
  const { headers } = req
  if (!headers.authentication) {
    res.status(401).json({ error: ERROR.authMissingError })
    return
  }
  if (!authenticate(headers)) {
    res.status(403).json({ error: ERROR.authFailedError })
    return
  }
  next('route')
}

module.exports = auth
