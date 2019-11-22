const { selectByUserId } = require('./dbService')

const getLoansWithUserId = async userId => {
  const sqlResult = await selectByUserId(userId)
  return sqlResult
}

module.exports = { getLoansWithUserId }
