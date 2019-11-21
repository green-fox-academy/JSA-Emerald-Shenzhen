/* eslint-disable no-console */
// connect mysql
const mysql = require('mysql')

const mysqldb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
  database: 'ProductModel'
  // host: process.env.HOST,
  // user: process.env.USER,
  // password: process.env.PASSWORD,
  // port: process.env.DB_PORT,
  // database: process.env.DATABASE
})

module.exports.mysqldb = mysqldb

exports.connectToDB = () => {
  mysqldb.connect(err => {
    if (err) {
      console.log(err)
    }
    console.log('connection successully')
  })
}
