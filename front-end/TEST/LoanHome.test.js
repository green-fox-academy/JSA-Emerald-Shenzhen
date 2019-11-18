import React from 'react'
import renderer from 'react-test-renderer'
import loanList from '../fakeLoanData'
import LoanHome from '../LoanHome/LoanHome'

describe('<LoanHome />', () => {
  it('<LoanHome > renders correctly', () => {
    const tree = renderer.create(<LoanHome loanList={loanList.loans} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('<LoanHome > has 2 child', () => {
    const tree = renderer.create(<LoanHome loanList={loanList.loans} />).toJSON()
    expect(tree.children.length).toBe(2)
  })
})
