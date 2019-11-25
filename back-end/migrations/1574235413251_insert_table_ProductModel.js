const upSeedSql = `INSERT INTO products ( slug, name, duration, icon, title, description, interest)
VALUES
( 'student_1', 'Student Loan',  '5 years fixed', 'student', '3% yearly interest rate', 'Fixed low interests for students only', 0.03),
( 'student_2', 'Student Loan',  '5 years fixed', 'student', '3% yearly interest rate', 'Fixed low interests for students only', 0.03),
( 'student_3', 'Student Loan',  '5 years fixed', 'student', '3% yearly interest rate', 'Fixed low interests for students only', 0.03),
( 'student_4', 'Student Loan',  '5 years fixed', 'student', '3% yearly interest rate', 'Fixed low interests for students only', 0.03)
`

const downSeedSql = `DELETE FROM products WHERE  name = 'Student Loan'`

module.exports = {
  up: upSeedSql,
  down: downSeedSql
}
