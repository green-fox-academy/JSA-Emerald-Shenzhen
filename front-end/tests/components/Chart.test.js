import React from 'react'
import renderer from 'react-test-renderer'
import Chart from '../../src/components/LoanDetails/Chart'

const mockLoanData = { history: [] }

describe('<Chart />', () => {
  it('<Chart > renders correctly', () => {
    const tree = renderer.create(<Chart loan={mockLoanData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
