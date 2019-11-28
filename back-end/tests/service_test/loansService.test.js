const { getLoansWithProductsByUserId, checkMissingField } = require('../../services/loansService')
const db = require('../../services/dbService')
const mockData = require('../../helpers/mockData_BE')
const { goodReqBody } = require('../MockData/loan_mockData')

jest.mock('../../services/dbService')
db.selectLoansByUserId.mockReturnValue(mockData.loan)
db.selectAllProductModels.mockReturnValue(mockData.products)

describe('Loan services', () => {
  describe('getLoansWithProductsByUserId', () => {
    it('should be called correctly', async () => {
      expect(await getLoansWithProductsByUserId()).toStrictEqual(
        mockData.loanServiceTestExpectResult
      )
      expect(db.selectLoansByUserId).toHaveBeenCalled()
    })
  })

  describe('checkMissingField', () => {
    it('should return an empty error if all the fields are provided', () => {
      expect(checkMissingField(goodReqBody)).toStrictEqual({ error: '' })
    })
  })
})
