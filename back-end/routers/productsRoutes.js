const express = require('express')

const { authenticate } = require('../services/authService')
const productsService = require('../services/productsService')
const mock = require('../helpers/mock-data')

const router = express.Router()

router.route('/').get((req, res) => {
  const { headers } = req
  if (!authenticate(headers)) {
    res.status(401).send(mock.error)
    return
  }
  productsService.getAllProducts(req, res)
})

module.exports = router
