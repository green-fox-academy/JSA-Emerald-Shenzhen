const { selectLoansByUserId } = require('./dbService')

const getLoansWithUserId = async userId => {
  try {
    const sqlLoans = await selectLoansByUserId(userId)
    // waiting for Amélie`s function
    // const sqlProducts =await selectProductModels()

    return sqlLoans
  } catch (error) {
    return { error }
  }
}

module.exports = { getLoansWithUserId }
