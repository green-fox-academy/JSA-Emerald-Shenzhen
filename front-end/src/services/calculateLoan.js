/**
 * calculateLoan
 *
 * @param {number} amount
 * The amount number of money for the loan, for example, 1000
 * @param {number} durationMonth
 * The number of month for the loan, 6 month should be 6
 * @param {number} yearlyRate
 * The number of yearly rate of the loan, 19% should be 0.19
 * @return {Object} monthly, interest
 * monthly: The monthly paid number of the loan
 * interest: The total interest should paid during the loan
 */
export default function calculateLoan(amount, durationMonth, yearlyRate) {
  if (Number.isNaN(amount - durationMonth - yearlyRate))
    throw new Error('calculateLoan(): params are not number')

  const monthlyRate = yearlyRate / 12
  const r1n = (1 + monthlyRate) ** durationMonth

  const monthly = (amount * (monthlyRate * r1n)) / (r1n - 1)
  const interest = monthly * durationMonth - amount

  return {
    monthly,
    interest
  }
}
