const { getLoansWithProductsByUserId } = require('../../services/loansService')
const db = require('../../services/dbService')

jest.mock('../../services/dbService')
db.selectLoansByUserId.mockReturnValue([{ id: 1, userId: 1, productId: 1, remaining: 3500 }])
db.selectAllProductModels.mockReturnValue({
  id: 1,
  slug: 'student_1',
  name: 'Student Loan',
  duration: '5 years fixed',
  icon: 'student',
  title: '3% yearly interest rate',
  description: 'Fixed low interests for students only',
  interest: 0.03
})

test('Testing getLoansWithUserId can be call correctly', async () => {
  expect(await getLoansWithProductsByUserId()).toStrictEqual([
    {
      id: 1,
      remaining: {
        id: 1,
        productId: 1,
        remaining: 3500,
        userId: 1
      },
      type: undefined,
      userId: 1
    }
  ])
  expect(db.selectLoansByUserId).toHaveBeenCalled()
})
