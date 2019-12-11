const express = require('express')
const {
  getLoansWithProductsByUserId,
  checkMissingField,
  addLoan
} = require('../services/loansService')
const { checkContentType } = require('../services/authService')
const { prepareHistory } = require('../services/loansService')

const router = express.Router()

router
  .route('/')
  .get(async (req, res, next) => {
    const loansData = await getLoansWithProductsByUserId(req.query.id)
    return loansData.error ? next(loansData.error) : res.status(200).json(loansData)
  })
  .post(async (req, res) => {
    const isContentType = checkContentType(req.headers)
    if (!isContentType) {
      return res.status(400).send({ error: 'Please specify content-type in request header' })
    }
    const check = checkMissingField(req.body)
    const { productId, amount } = req.body
    return check.error ? res.status(400).send(check) : res.json(await addLoan(1, productId, amount))
  })

router.param('id', (req, res, next, name) => {
  if (Number.isInteger(Number(name))) {
    return next()
  }
  return res.status(400).send({ error: 'Loan id should be an integer' })
})

router.route('/:id').get(async (req, res, next) => {
  const loan = await prepareHistory(req.params.id)
  if (loan.error) return next(loan.error)
  return res.status(200).json(loan)
})

module.exports = router
