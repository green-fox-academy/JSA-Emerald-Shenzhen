import React from 'react'
import renderer from 'react-test-renderer'
import LoanCard from '../../src/components/LoanList/LoanCard/LoanCard'
import mockData from '../../helpers/mockData_FE'

describe('<LoanHome />', () => {
  it('<LoanList > renders correctly', () => {
    const tree = renderer.create(<LoanCard loan={mockData.loans[0]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
