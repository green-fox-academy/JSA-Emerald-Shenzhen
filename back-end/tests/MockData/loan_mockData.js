const goodReqBody = {
  productId: 1,
  amount: 5000,
  duration: 60,
  receivingAccount: 123,
  payment: 'manually'
}

const badReqBodyLackInfo = {
  productId: 1,
  receivingAccount: 123,
  payment: 'manually'
}

const noContentTypeError = {
  error: 'Please specify content-type in request header'
}

const createLoanSuccess = {
  loanId: 1,
  status: 'granted'
}

const createLoanFail = {
  error: 'Amount is missing!'
}

const getLoanbyIdFail = {
  error: 'Loan id should be an integer'
}

module.exports = {
  goodReqBody,
  badReqBodyLackInfo,
  noContentTypeError,
  createLoanSuccess,
  createLoanFail,
  getLoanbyIdFail
}
