require('dotenv').config()
const mysql = require('mysql')

const dbService = {
  init: () => {
    this.pool = mysql.createPool(process.env.MYSQL_URL)
  }
}
dbService.selectLoansByUserId = id => {
  const SQL = `SELECT * FROM loans${id ? ' WHERE userId=?;' : ';'}`
  const sqlPromise = dbService.getPromise(SQL)
  return sqlPromise
}
dbService.selectAllProductModels = () => {
  const SQL = `SELECT * FROM products;`
  const sqlPromise = dbService.getPromise(SQL)
  return sqlPromise
}
dbService.getPromise = SQL => {
  return new Promise((resolve, reject) => {
    if (!this.pool) reject(new Error('connection missing'))

    this.pool.query(SQL, (error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  })
}

module.exports = dbService
