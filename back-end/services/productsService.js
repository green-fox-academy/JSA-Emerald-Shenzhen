const dbService = require('./dbService')

const getAllProducts = () => {
  const data = dbService.selectProductModels()
  console.log(data)
  return data
}

module.exports = { getAllProducts }
