module.exports = {
  up: `UPDATE products SET description = CASE id 
  WHEN 1 THEN 'Fixed low interests for students only Fixed low interests for students only Fixed low interests for students only' 
  WHEN 2 THEN 'Fixed low interests for students only Fixed low interests for Unsecured only Fixed low interests for students only' 
  WHEN 3 THEN 'Fixed low interests for students only Fixed low interests for pay day only Fixed low interests for students only' 
  WHEN 4 THEN 'Fixed low interests for students only Fixed low interests for secured only Fixed low interests for students only' 
  END,
  slug = CASE id
  WHEN 1 THEN 'student loan'
  WHEN 2 THEN 'unsecured'
  WHEN 3 THEN 'pay day'
  WHEN 4 THEN 'secured'
  END,
  name = CASE id
  WHEN 1 THEN 'Student Loan'
  WHEN 2 THEN 'Unsecured'
  WHEN 3 THEN 'Pay day'
  WHEN 4 THEN 'Secured'
  END
  WHERE id IN (1,2,3,4);`,
  down: 'show tables'
}
