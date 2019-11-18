import React from 'react'
import renderer from 'react-test-renderer'
import loanList from '../fakeLoanData'
import LoanList from '../LoanList/LoanList'

describe('<LoanHome />', () => {
  it('<LoanHome > renders correctly', () => {
    const tree = renderer.create(<LoanList loanList={loanList.loans} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('<LoanHome > has 2 child', () => {
    const tree = renderer.create(<LoanList loanList={loanList.loans} />).toJSON()
    expect(tree.children.length).toBe(2)
  })
})
