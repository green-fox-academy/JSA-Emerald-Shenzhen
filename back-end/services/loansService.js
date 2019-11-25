const { selectLoansByUserId, selectAllProductModels } = require('./dbService')

const getLoansWithProductsByUserId = async userId => {
  try {
    const sqlLoans = await selectLoansByUserId(userId)
    const sqlProducts = await selectAllProductModels()

    const result = sqlLoans.map(loan => {
      return {
        id: loan.id,
        userId: loan.userId,
        type: sqlProducts[loan.productId + 1],
        remaining: loan
      }
    })
    console.log(result)

    return result
  } catch (error) {
    return { error }
  }
}

module.exports = { getLoansWithProductsByUserId }
