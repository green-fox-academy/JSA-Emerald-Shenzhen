const request = require('supertest')
const app = require('../../app')
const productsService = require('../../services/productsService')
const productModels = require('../MockData/productService_mockData')

jest.mock('../../services/productsService')
productsService.getAllProductModels.mockReturnValue({ products: productModels })

describe('GET /products', () => {
  describe('Vaild request', () => {
    it('should return all productModels', async () => {
      const res = await request(app)
        .get('/products')
        .set('Authentication', 'Bearer token')
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveProperty('products')
    })
  })
  describe('Missing or incorrect Authentication header', () => {
    it('should return 401 Unauthorized', async () => {
      const res = await request(app).get('/products')
      expect(res.statusCode).toEqual(401)
      expect(res.body).toHaveProperty('error')
    })
  })
  describe('Incorrect Authentication header', () => {
    it('should return 403 Unauthorized', async () => {
      const res = await request(app)
        .get('/products')
        .set('Authentication', 'Incorrect Bearer token')
      expect(res.statusCode).toEqual(403)
      expect(res.body).toHaveProperty('error')
    })
  })
})
