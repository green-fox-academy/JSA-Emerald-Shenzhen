const request = require('supertest')
const app = require('../app')

const correctVersion = {
  data: {
    products: [
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
  },
  error: {
    error: 'Authentication header is missing!'
  }
}

describe('GET /products', () => {
  it('should return products', done => {
    request(app)
      .get('/products')
      .set('Accept', 'application/json')
      .set('Authentication', 'Bearer token')
      .expect('Content-Type', /json/)
      .expect(200, correctVersion.data, done)
  })

  it('should return error', done => {
    request(app)
      .get('/products')
      .expect('Content-Type', /json/)
      .expect(401, correctVersion.error, done)
  })
})
