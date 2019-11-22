const express = require('express')
const { authenticate } = require('../services/authService')
const { getAllProducts } = require('../services/productsService')
const ERROR = require('../helpers/errors')

const router = express.Router()

router.route('/').get((req, res) => {
  const { headers } = req
  if (!headers.authentication) {
    return res.status(401).json({ error: ERROR.authMissingError })
  }
  if (!authenticate(headers)) {
    return res.status(401).send({ error: ERROR.authMissingError })
  }

  const data = getAllProducts()
  res.format({
    'application/json': () => {
      res.status(200).json({ products: data })
    }
  })
  return res
})

module.exports = router
