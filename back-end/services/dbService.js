require('dotenv').config()
const mysql = require('mysql')

const dbService = {
  init: () => {
    this.pool = mysql.createPool(process.env.MYSQL_URL)
  }
}
dbService.selectLoansByUserId = id => {
  const SQL = `SELECT * FROM loans${id ? ' WHERE userId=?;' : ';'}`
  const sqlPromise = dbService.getPromise(SQL, [id])
  return sqlPromise
}
dbService.selectAllProductModels = () => {
  const SQL = `SELECT * FROM products;`
  const sqlPromise = dbService.getPromise(SQL)
  return sqlPromise
}
dbService.addLoan = (userId, productId, remaining) => {
  return dbService.getPromise('INSERT INTO loans (userId, productId, remaining) values (?, ?, ?)', [
    userId,
    productId,
    remaining
  ])
}
dbService.getPromise = (SQL, params = []) => {
  return new Promise((resolve, reject) => {
    if (!this.pool) reject(new Error('connection missing'))

    this.pool.query(SQL, params, (error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  })
}
dbService.getLoansById = id => {
  const SQL = `SELECT * FROM loans${id ? ' WHERE id=?;' : ';'}`
  const sqlPromise = dbService.getPromise(SQL, [id])
  return sqlPromise
}

dbService.getProductById = id => {
  const SQL = `SELECT * FROM products${id ? ' WHERE id=?;' : ';'}`
  const sqlPromise = dbService.getPromise(SQL, [id])
  return sqlPromise
}

module.exports = dbService
