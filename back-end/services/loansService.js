const { selectLoansByUserId, selectAllProductModels } = require('./dbService')

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
        remaining: loan
      }
    })

    return result
  } catch (error) {
    return { error: error.toString() }
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

module.exports = { getLoansWithProductsByUserId, checkMissingField }
