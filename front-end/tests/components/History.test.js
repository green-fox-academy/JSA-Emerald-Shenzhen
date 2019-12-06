import React from 'react'
import renderer from 'react-test-renderer'
import History from '../../src/components/LoanDetails/History'

const mockLoanData = { history: [] }

describe('<History />', () => {
  it('<History > renders correctly', () => {
    const tree = renderer.create(<History loan={mockLoanData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
