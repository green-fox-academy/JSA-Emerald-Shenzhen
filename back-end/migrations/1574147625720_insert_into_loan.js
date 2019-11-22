module.exports = {
  up:
    'INSERT INTO loan (userId, productId, remaining) values (1, 1, 3500), (1, 2, 3400),(3, 3, 3300),(4, 4, 3450);',
  down: 'DELETE FROM loan;'
}
