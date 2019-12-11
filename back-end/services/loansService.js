const { selectLoansByUserId, selectAllProductModels } = require('./dbService')
const dbService = require('./dbService')
const data = require('../helpers/mockData_BE')

const postLoanBodyFields = ['productId', 'amount', 'duration', 'receivingAccount', 'payment']

const getLoansWithProductsByUserId = async userId => {
  try {
    const sqlLoans = await selectLoansByUserId(userId)
    const sqlProducts = await selectAllProductModels()

    const result = sqlLoans.map(loan => {
      return {
        id: loan.id,
        userId: loan.userId,
        type: sqlProducts.find(product => product.id === loan.productId),
        remaining: loan.remaining
      }
    })

    return result
  } catch (error) {
    return { error: error.toString() }
  }
}

const addLoan = async (userId, productId, remaining) => {
  const result = await dbService.addLoan(userId, productId, remaining)
  return {
    loanId: result.insertId,
    status: 'granted'
  }
}

const checkMissingField = body => {
  return postLoanBodyFields.reduce(
    (accu, field) => {
      const upperField = field.charAt(0).toUpperCase() + field.slice(1)
      if (body[field] === undefined) {
        return accu.error ? accu : { error: `${upperField} is missing!` }
      }
      return accu.error ? accu : { error: '' }
    },
    { error: '' }
  )
}

const prepareHistory = async loanId => {
  try {
    const matchedLoans = await dbService.getLoansById(loanId)
    if (matchedLoans.length === 0) return { error: "Can't find this loan" }

    let loan = matchedLoans[0]

    const matchedProducts = await dbService.getProductById(loan.productId)
    if (matchedProducts.length === 0) return { error: "Can't find this product" }

    loan = {
      id: loan.id,
      userId: loan.userId,
      type: matchedProducts[0],
      remaining: loan.remaining
    }

    const historyItem = data.historyList.find(item => item.id === loan.id)
    if (!historyItem) return loan
    loan.history = historyItem.history
    return loan
  } catch (error) {
    return { error }
  }
}

module.exports = { getLoansWithProductsByUserId, checkMissingField, addLoan, prepareHistory }
