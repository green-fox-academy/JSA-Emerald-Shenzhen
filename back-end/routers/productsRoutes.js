const express = require('express')
const { authenticate } = require('../services/authService')
const { getAllProductModels } = require('../services/productsService')
const ERROR = require('../helpers/errors')

const router = express.Router()

router.route('/').get(async (req, res) => {
  const { headers } = req
  if (!headers.authentication) {
    return res.status(401).json({ error: ERROR.authMissingError })
  }
  if (!authenticate(headers)) {
    return res.status(403).json({ error: ERROR.authFailedError })
  }
  const productModelsData = await getAllProductModels()

  if (productModelsData.error) return res.status(500).json({ error: productModelsData.error })
  // return the result if everything is good
  return res.status(200).json(productModelsData)
})

module.exports = router
