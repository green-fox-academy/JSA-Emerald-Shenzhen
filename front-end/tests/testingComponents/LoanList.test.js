import React from 'react'
import renderer from 'react-test-renderer'
import loanList from '../../helpers/fakeLoanData'
import LoanList from '../../src/components/LoanList/LoanList'

describe('<LoanHome />', () => {
  it('<LoanList > renders correctly', () => {
    const tree = renderer.create(<LoanList loanList={loanList.loans} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('<LoanList > has 2 child', () => {
    const tree = renderer.create(<LoanList loanList={loanList.loans} />).toJSON()
    expect(tree.children.length).toBe(2)
  })
})
