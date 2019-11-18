const request = require('supertest')
const app = require('../app')

const mock = {
  data: {
    products: [
      {
        id: 1,
        slug: 'student',
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
      .expect(200, mock.data, done)
  })

  it('should return error', done => {
    request(app)
      .get('/products')
      .expect('Content-Type', /json/)
      .expect(401, mock.error, done)
  })
})
