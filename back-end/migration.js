
const mysql = require('mysql');
const migration = require('mysql-migrations');
const assert = require('assert');

try {
  require('dotenv').config();
  assert(process.env.MYSQL_URL);
} catch(e) {
  throw e;
  console.error('Please create .env file and write mysql url by MYSQL_URL=');
}

const conn = mysql.createPool(process.env.MYSQL_URL);
conn.getConnection((error)=>{
  if (error) console.error('Failed to connect to database');
});

migration.init(conn, __dirname + '/migrations');