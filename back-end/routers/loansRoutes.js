const express = require('express')

const router = express.Router()

const { authenticate } = require('../services/authService')
const mock = require('../helpers/loans-mock-data')

router.route('/').get((req, res) => {
  const { headers } = req
  if (!headers.authentication) {
    return res.status(401).json(mock.authMissingError)
  }
  if (authenticate(headers)) {
    return res.json(mock.data)
  }
  return res.status(403).json(mock.authFailedError)
})

module.exports = router
