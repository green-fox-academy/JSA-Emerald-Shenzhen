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
    // this.connection.connect(() => {
    //   // eslint-disable-next-line no-console
    //   console.log(`database is connected`)
    // })
  },
  selectLoansByUserId: id => {
    const SQL = `SELECT * FROM loans${id ? ' WHERE userId=?;' : ';'}`

    // let connection = this.pool.getConnection();

    return new Promise((resolve, reject) => {
      // if (!connection) reject(new Error('connection missing'))

      this.pool.query(SQL, id, (error, result) => {
        if (error) reject(error)
        resolve(result)
      })
      // connection.releaseConnection(() => {
      //   // eslint-disable-next-line no-console
      //   console.log(`selectLoansByUserId: database is ended`)
      // })
    })
  },
  selectAllProductModels: () => {
    this.pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      const SQL = `SELECT * FROM products;`
      return new Promise((resolve, reject) => {
        // Use the connection
        connection.query(SQL, function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();

          // Handle error after the release.
          if (error) throw error;
          resolve(result)
          // Don't use the connection here, it has been returned to the pool.
        })
      })
    })
  }
}

module.exports = dbService
