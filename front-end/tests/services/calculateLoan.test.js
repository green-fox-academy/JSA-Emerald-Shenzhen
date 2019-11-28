import calculateLoan from '../../src/services/calculateLoan'

describe('calculateLoan()', () => {
  it('return right result', () => {
    const paid = calculateLoan(1000, 6, 0.19)
    expect(paid.monthly.toFixed(2)).toBe('176.02')
    expect(paid.interest.toFixed(2)).toBe('56.14')
  })
})
