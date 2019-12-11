const {
  getLoansWithProductsByUserId,
  checkMissingField,
  prepareHistory
} = require('../../services/loansService')
const db = require('../../services/dbService')
const mockData = require('../../helpers/mockData_BE')
const { goodReqBody } = require('../MockData/loan_mockData')

jest.mock('../../services/dbService')
db.selectLoansByUserId.mockReturnValue(mockData.loan)
db.selectAllProductModels.mockReturnValue(mockData.products)
db.getLoansById.mockReturnValue(mockData.loan)
db.getProductById.mockReturnValue(mockData.products)

describe('Loan services', () => {
  describe('getLoansWithProductsByUserId', () => {
    it('should be called correctly', async () => {
      const expected = await getLoansWithProductsByUserId()
      expect(expected).toStrictEqual(mockData.loanServiceTestExpectResult)
      expect(db.selectLoansByUserId).toHaveBeenCalled()
    })
  })

  describe('checkMissingField', () => {
    it('should return an empty error if all the fields are provided', () => {
      expect(checkMissingField(goodReqBody)).toStrictEqual({ error: '' })
    })
  })

  describe('prepareHistory', () => {
    it('should return an empty error if all the fields are provided', async () => {
      const expected = await prepareHistory(1)
      expect(expected).not.toEqual(expect.objectContaining({ error: 'error' }))
    })
  })
})
