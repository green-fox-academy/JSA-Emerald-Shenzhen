require('dotenv').config()
const mysql = require('mysql')

const dbService = {
  init: () => {
    this.connection = mysql.createPool(process.env.MYSQL_URL)
    this.connection.getConnection(() => {
      // eslint-disable-next-line no-console
      console.log(`database is connected`)
    })
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
    if (!this.connection) reject(new Error('connection missing'))

    this.connection.query(SQL, (error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  })
}

module.exports = dbService
