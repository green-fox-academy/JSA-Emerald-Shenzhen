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
  selectByUserId: async id => {
    if (!this.connection) return { error: 'connection missing' }
    const sqlResult = await this.connection.query(
      'SELECT FROM loans WHERE userId=?',
      id,
      (error, result) => {
        if (error) return { error }
        return result
      }
    )
    return sqlResult
  }
}

module.exports = dbService
