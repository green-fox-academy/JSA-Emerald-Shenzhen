const express = require('express')
const { getLoansWithProductsByUserId } = require('../services/loansService')

const router = express.Router()

router.route('/').get(async (req, res) => {
  const loansData = await getLoansWithProductsByUserId(req.query.id)
  if (loansData.error) return res.status(500).json({ error: loansData.error })
  return res.status(200).json(loansData)
})

module.exports = router
