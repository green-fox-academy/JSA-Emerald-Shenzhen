// product_id, rate, duration, minAmount, maxAmount
const data = [
  [1, 0.03, 'only 5 years', 5000, 10000],
  [2, 0.15, 'maximum 30 days', 0, 1000],
  [3, 0.2, '1-6 months', 0, 2000],
  [4, 0.1, '5-20 years', 0, 50000]
]

let sql = 'INSERT INTO product_options (product_id, name, value) values '

data.forEach(options => {
  sql += `(${options[0]}, 'rate', '${options[1]}'), 
            (${options[0]}, 'duration', '${options[2]}'),
            (${options[0]}, 'minAmount', '${options[3]}'),
            (${options[0]}, 'maxAmount', '${options[4]}'),`
})

sql = sql.substr(0, sql.length - 1)

module.exports = {
  up: sql,
  down: 'DELETE FROM product_options'
}
