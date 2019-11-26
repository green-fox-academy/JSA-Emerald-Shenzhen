const { getLoansWithProductsByUserId } = require('../../services/loansService')
const db = require('../../services/dbService')
const mockData = require('../../helpers/mockData_BE')

jest.mock('../../services/dbService')
db.selectLoansByUserId.mockReturnValue(mockData.loan)
db.selectAllProductModels.mockReturnValue(mockData.products)

test('Testing getLoansWithUserId can be call correctly', async () => {
  expect(await getLoansWithProductsByUserId()).toStrictEqual(mockData.loanServiceTestExpectResult)
  expect(db.selectLoansByUserId).toHaveBeenCalled()
})
