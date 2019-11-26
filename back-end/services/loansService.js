const { selectLoansByUserId, selectAllProductModels } = require('./dbService')

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

module.exports = { getLoansWithProductsByUserId }
