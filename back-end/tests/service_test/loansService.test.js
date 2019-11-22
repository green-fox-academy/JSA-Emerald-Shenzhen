const { getLoansWithUserId } = require('../../services/loansService')
const db = require('../../services/dbService')

jest.mock('../../services/dbService')
db.selectByUserId.mockReturnValue(3)

test('Testing getLoansWithUserId can be call correctly', () => {
  expect(getLoansWithUserId()).toBe(3)
  expect(db.selectByUserId).toHaveBeenCalled()
})
