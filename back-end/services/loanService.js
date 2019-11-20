const { selectByUserId } = require('./dbService')

const getLoansWithUserId = userId => {
  console.log(selectByUserId(userId))
}

module.exports = { getLoansWithUserId }
