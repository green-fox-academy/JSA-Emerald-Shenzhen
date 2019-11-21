const getAllProducts = (req, res) => {
  const query = 'SELECT * FROM products;'

  query(query, (err, data) => {
    // eslint-disable-next-line no-unused-expressions
    err
      ? res.status(400).send(err)
      : res.format({
        'application/json': function () {
          res.status(200).json({ products: data })
        }
      })
  })
}

module.exports = { getAllProducts }
