require('dotenv').config()
const mysql = require('mysql')

const dbService = {
  init: () => {
    this.pool = mysql.createPool({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    })
    this.connection.connect(() => {
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
