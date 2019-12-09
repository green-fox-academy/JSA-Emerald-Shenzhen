module.exports = {
  up:
    'CREATE TABLE IF NOT EXISTS product_options (id INTEGER NOT NULL auto_increment primary key , product_id INTEGER NOT NULL , name VARCHAR(100) NOT NULL , value VARCHAR(100) NOT NULL, FOREIGN KEY (product_id) REFERENCES products(id))',
  down: 'DROP TABLE product_options'
}
