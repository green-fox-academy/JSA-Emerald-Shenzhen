const upSeedSql = `INSERT INTO products ( slug, name, duration, icon, title, description, interest)
VALUES
( 'student-1', 'Student Loan',  '5 years fixed', 'student', '3% yearly interest rate', 'Fixed low interests for students only', 0.03),
( 'student-2', 'Secured loan',  '5 years fixed', 'student', '3% yearly interest rate', 'Fixed low interests for students only', 0.03),
( 'student-3', 'Fixed loan',  '5 years fixed', 'student', '3% yearly interest rate', 'Fixed low interests for students only', 0.03),
( 'student-4', 'Unsecured loan',  '5 years fixed', 'student', '3% yearly interest rate', 'Fixed low interests for students only', 0.03)
`

const downSeedSql = `DELETE FROM products WHERE  name = 'Student Loan'`

module.exports = {
  up: upSeedSql,
  down: downSeedSql
}
