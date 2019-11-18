const express = require('express')

const { authenticate } = require('../services/authService')
const mock = require('../helpers/mock-data')

const router = express.Router()

router.route('/').get((req, res) => {
  const { headers } = req
  if (!authenticate(headers)) {
    res.status(401).send(mock.error)
    return
  }
  res.status(200).send(mock.data)
})

module.exports = router
