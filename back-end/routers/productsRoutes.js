const express = require('express')
const { getAllProductModels } = require('../services/productsService')

const router = express.Router()

router.route('/').get(async (req, res) => {
  const productModelsData = await getAllProductModels()
  if (productModelsData.error) return res.status(500).json({ error: productModelsData.error })
  return res.status(200).json(productModelsData)
})

module.exports = router
