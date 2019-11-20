require('dotenv').config()
const mysql = require('mysql')

let connection = null

function init() {
  connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  })

  connection.connect(() => {
    // eslint-disable-next-line no-console
    console.log(`database is connected`)
  })
}

// eslint-disable-next-line consistent-return
function selectByUserId(id) {
  if (!connection) return { error: 'connection is down' }
  connection.query('SELECT FROM loans WHERE userId=?', id, (error, result) => {
    if (error) return { error }
    return result
  })
}

module.exports = {
  selectByUserId,
  init
}
