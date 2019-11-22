require('dotenv').config()
const mysql = require('mysql')

const dbService = {
  init: () => {
    this.connection = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    })
    this.connection.connect(() => {
      // eslint-disable-next-line no-console
      console.log(`database is connected`)
    })
  },
  selectLoansByUserId: id => {
    const SQL = `SELECT * FROM loan${id ? ' WHERE userId=?;' : ';'}`

    return new Promise((resolve, reject) => {
      if (!this.connection) reject(new Error('connection missing'))

      this.connection.query(SQL, id, (error, result) => {
        if (error) reject(error)
        resolve(result)
      })
    })
  }
}

module.exports = dbService
