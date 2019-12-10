const express = require('express')
const {
  getLoansWithProductsByUserId,
  checkMissingField,
  addLoan
} = require('../services/loansService')
const { checkContentType } = require('../services/authService')
const data = require('../helpers/mockData_BE')

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

router.route('/:id').get(async (req, res) => {
  const loansData = await getLoansWithProductsByUserId(req.query.id)
  if (loansData.error) return loansData.error
  const basicLoan = loansData.find(item => item.id === Number(req.params.id))
  if (!basicLoan) return res.status(400).send({ error: "Can't find this loan" })
  const historyItem = data.historyList.find(item => item.id === basicLoan.id)
  if (!historyItem) return res.status(200).send(basicLoan)
  basicLoan.history = historyItem.history
  return res.status(200).send(basicLoan)
})

module.exports = router
