const request = require('supertest')
const app = require('../../app')
const loanService = require('../../services/loansService')

jest.mock('../../services/loansService')
loanService.getLoansWithProductsByUserId.mockReturnValue({ loans: 'you have got a list of loans' })

describe('GET /loans', () => {
  describe('Vaild request', () => {
    it('should return all loans', async () => {
      const res = await request(app)
        .get('/loans')
        .set('Authentication', 'Bearer token')
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('loans')
    })
  })
  describe('Missing or incorrect Authentication header', () => {
    it('should return 401 Unauthorized', async () => {
      const res = await request(app).get('/loans')
      expect(res.statusCode).toEqual(401)
      expect(res.body).toHaveProperty('error')
    })
  })
  describe('Incorrect Authentication header', () => {
    it('should return 403 Unauthorized', async () => {
      const res = await request(app)
        .get('/loans')
        .set('Authentication', 'Incorrect Bearer token')
      expect(res.statusCode).toEqual(403)
      expect(res.body).toHaveProperty('error')
    })
  })
})
