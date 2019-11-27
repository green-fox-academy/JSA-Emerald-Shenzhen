const express = require('express')
const { getLoansWithProductsByUserId } = require('../services/loansService')

const router = express.Router()

router.route('/').get(async (req, res, next) => {
  const loansData = await getLoansWithProductsByUserId(req.query.id)
  return loansData.error ? next(loansData.error) : res.status(200).json(loansData)
})

module.exports = router
