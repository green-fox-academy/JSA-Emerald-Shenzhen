module.exports = {
  up: `UPDATE products SET description = CASE id 
  WHEN 1 THEN
  'A student loan is a type of loan designed to help students pay for post-secondary education and the associated fees, such as tuition, books and supplies, and living expenses. ' 
  WHEN 2 THEN
  'Under risk-based pricing, creditors tend to demand extremely-high interest rates as a condition of extending unsecured debt. ' 
  WHEN 3 THEN
  'To prevent usury (unreasonable and excessive rates of interest), some jurisdictions limit the annual percentage rate (APR) that any lender, including payday lenders, can charge.' 
  WHEN 4 THEN
   'Even though lenders repossess property for defaulted secured loans, you could still end up owing money on the loan if you default. When lenders repossess property, they sell it and use the proceeds to pay off the loan. ' 
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
  END,
  duration = CASE id
  WHEN 1 THEN '5 years fixed'
  WHEN 2 THEN '6 months fixed'
  WHEN 3 THEN '30 days fixed'
  WHEN 4 THEN '10 years fixed'
  END,
  interest = CASE id
  WHEN 1 THEN 3
  WHEN 2 THEN 20
  WHEN 3 THEN 15
  WHEN 4 THEN 10
  END,
  title = CASE id
  WHEN 1 THEN '3% interest, applied yearly'
  WHEN 2 THEN '20% interest, applied monthly'
  WHEN 3 THEN '15% interest, applied daily'
  WHEN 4 THEN '10% interest, applied yearly'
  END
  WHERE id IN (1,2,3,4);`,
  down: 'SELECT * FROM products;'
}
