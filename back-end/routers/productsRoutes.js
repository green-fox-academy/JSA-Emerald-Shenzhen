const express = require('express')
const { authenticate } = require('../services/authService')
const ERROR = require('../helpers/errors')

const router = express.Router()

router.route('/').get((req, res) => {
  const { headers } = req
  if (!authenticate(headers)) {
    res.status(401).send({ error: ERROR.authMissingError })
    return
  }
  res.status(200).send({})
})

module.exports = router
