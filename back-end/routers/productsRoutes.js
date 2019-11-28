const express = require('express')
const { getAllProductModels } = require('../services/productsService')

const router = express.Router()

router.route('/').get(async (req, res, next) => {
  const productModelsData = await getAllProductModels()
  return productModelsData.error
    ? next(productModelsData.error)
    : res.status(200).json(productModelsData)
})

module.exports = router
