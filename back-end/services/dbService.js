require('dotenv').config()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

connection.connect(() => {
  // eslint-disable-next-line no-console
  console.log(`database is connected`)
})

function selectByUserId(id) {
  connection.query('SELECT FROM loans WHERE userId=?', id, (err, result) => {
    if (err) return { err }
    return result
  })
}

module.exports = {
  selectByUserId
}
