import getPaid from '../../src/services/getPaid'

describe('getPaid()', () => {
  it('return right result', () => {
    const paid = getPaid(1000, 6, 0.19)
    expect(paid.monthly.toFixed(2)).toBe('176.02')
    expect(paid.interest.toFixed(2)).toBe('56.14')
  })
})
