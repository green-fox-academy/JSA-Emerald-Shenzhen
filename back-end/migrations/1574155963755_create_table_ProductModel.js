const createTableSql = `CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  slug VARCHAR(50) NOT NULL, 
  name VARCHAR(50) NOT NULL,
  duration VARCHAR(100) NOT NULL,
  icon VARCHAR(100) NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  interest DOUBLE NOT NULL,
  PRIMARY KEY ( id )
)`

module.exports = {
  up: createTableSql,
  down: 'DROP TABLE products'
}
