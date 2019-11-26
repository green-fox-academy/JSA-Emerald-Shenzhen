const { selectAllProductModels } = require('./dbService')

const getAllProductModels = async () => {
  try {
    const sqlProductModels = await selectAllProductModels()
    return sqlProductModels
  } catch (error) {
    return { error: error.toString() }
  }
}

module.exports = { getAllProductModels }
