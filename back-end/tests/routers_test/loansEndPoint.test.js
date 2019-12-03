const request = require('supertest')
const app = require('../../app')
const loanService = require('../../services/loansService')
const commonAuthTest = require('./commonAuthTest')
const {
  noContentTypeError,
  createLoanSuccess,
  createLoanFail,
  getLoanbyIdFail
} = require('../MockData/loan_mockData')
const data = require('../../helpers/mockData_BE')

jest.mock('../../services/loansService')
loanService.getLoansWithProductsByUserId.mockReturnValue({ loans: 'you have got a list of loans' })

describe('GET /loans', () => {
  commonAuthTest(request(app).get, '/loans')

  describe('Vaild request', () => {
    it('should return all loans', async () => {
      const res = await request(app)
        .get('/loans')
        .set('Authentication', 'Bearer token')
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('loans')
    })
  })
})

describe('POST /loans', () => {
  commonAuthTest(request(app).post, '/loans')

  describe('No content-type in request header', () => {
    it('should return 400 with an error to remind content-type', done => {
      request(app)
        .post('/loans')
        .set('Authentication', 'Bearer token')
        .expect(400, noContentTypeError)
        .end(done)
    })
  })

  describe('Lack of fields in request body', () => {
    it('should return 400 with a sepecific error', done => {
      loanService.checkMissingField.mockReturnValue({
        error: 'Amount is missing!'
      })
      request(app)
        .post('/loans')
        .set('Authentication', 'Bearer token')
        .set('Content-type', 'application/json')
        .expect(400, createLoanFail)
        .end(done)
    })
  })

  describe('Good request', () => {
    it('should respond granted', done => {
      loanService.checkMissingField.mockReturnValue({ error: '' })
      request(app)
        .post('/loans')
        .set('Authentication', 'Bearer token')
        .set('Content-type', 'application/json')
        .expect(200, createLoanSuccess)
        .end(done)
    })
  })
})

describe('GET /loans/:id', () => {
  commonAuthTest(request(app).get, '/loans/1')

  describe('Invaild id', () => {
    it('should return an object with an error field', done => {
      request(app)
        .get('/loans/string')
        .set('Authentication', 'Bearer token')
        .expect(400, getLoanbyIdFail)
        .end(done)
    })
  })

  describe('Vaild id', () => {
    it('should return all the details of that loan', done => {
      request(app)
        .get('/loans/1')
        .set('Authentication', 'Bearer token')
        .expect(200, data.loansDetails)
        .end(done)
    })
  })
})
