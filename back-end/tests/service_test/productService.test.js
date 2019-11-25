const { getAllProductModels } = require('../../services/productsService')
const db = require('../../services/dbService')
const productModels = require('../MockData/productService_mockData')

jest.mock('../../services/dbService')
db.selectAllProductModels.mockReturnValue(productModels)

test('Testing getLoansWithUserId can be call correctly', async () => {
  expect(await getAllProductModels()).toBe(productModels)
  expect(db.selectAllProductModels).toHaveBeenCalled()
})
