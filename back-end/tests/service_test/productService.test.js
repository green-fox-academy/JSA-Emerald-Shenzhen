const { getAllProductModels } = require('../../services/productsService')
const db = require('../../services/dbService')

const productModels = [
  {
    id: 1,
    slug: 'student_1',
    name: 'Student Loan',
    duration: '5 years fixed',
    icon: 'student',
    title: '3% yearly interest rate',
    description: 'Fixed low interests for students only',
    interest: 0.03
  },
  {
    id: 2,
    slug: 'student_2',
    name: 'Student Loan',
    duration: '5 years fixed',
    icon: 'student',
    title: '3% yearly interest rate',
    description: 'Fixed low interests for students only',
    interest: 0.03
  },
  {
    id: 3,
    slug: 'student_3',
    name: 'Student Loan',
    duration: '5 years fixed',
    icon: 'student',
    title: '3% yearly interest rate',
    description: 'Fixed low interests for students only',
    interest: 0.03
  },
  {
    id: 4,
    slug: 'student_4',
    name: 'Student Loan',
    duration: '5 years fixed',
    icon: 'student',
    title: '3% yearly interest rate',
    description: 'Fixed low interests for students only',
    interest: 0.03
  }
]

jest.mock('../../services/dbService')
db.selectAllProductModels.mockReturnValue(productModels)

test('Testing getLoansWithUserId can be call correctly', () => {
  expect(getAllProductModels()).toBe(productModels)
  expect(db.selectAllProductModels).toHaveBeenCalled()
})
