const express = require('express')
const { getLoansWithProductsByUserId } = require('../services/loansService')
const { authenticate } = require('../services/authService')
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
  const loansData = await getLoansWithProductsByUserId(req.query.id)

  if (loansData.error) return res.status(400).json({ error: loansData.error })
  // return the result if everything is good
  return res.status(200).json(loansData)
})

module.exports = router
