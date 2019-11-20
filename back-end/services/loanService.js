const { selectByUserId } = require('./dbService')

const getLoansWithUserId = userId => {
  return selectByUserId(userId)
}

module.exports = { getLoansWithUserId }
