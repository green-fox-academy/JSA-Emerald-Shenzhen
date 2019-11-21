const connectToDBFile = require('../db/connectToDB')

const getAllProducts = (req, res) => {
  const query = 'SELECT * FROM products;'

  connectToDBFile.mysqldb.query(query, (err, data) => {
    if (err) {
      res.status(400).send(err)
    }
    res.format({
      'application/json': () => {
        res.status(200).json({ products: data })
      }
    })
  })
}

module.exports = { getAllProducts }
