const { getLoansWithUserId } = require('../../services/loanService')
const db = require('../../services/dbService')

// mocking the hold dbService
jest.mock('../../services/dbService')
// replace the func selectByUserId in mocked db with {return 3}
db.selectByUserId.mockReturnValue(3)

test('Testing getLoansWithUserId can be call correctly', () => {
  // testing if the getLoansWithUserId is actualy returning 3 but not returning the result from database
  expect(getLoansWithUserId()).toBe(3)
  // testing if the replaced func had been called
  expect(db.selectByUserId).toHaveBeenCalled()
})
