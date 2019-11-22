require('dotenv').config()
const mysql = require('mysql')
const migration = require('mysql-migrations')
const assert = require('assert')

try {
  assert(process.env.MYSQL_URL)
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Please create .env file and write mysql url by MYSQL_URL=')
  process.exit()
}

const conn = mysql.createPool(process.env.MYSQL_URL)
conn.getConnection(error => {
  // eslint-disable-next-line no-console
  if (error) console.error('Failed to connect to database')
})

migration.init(conn, `${__dirname}/migrations`)
