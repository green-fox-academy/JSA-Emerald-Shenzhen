import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import NewLoanDetails from '../../src/components/NewLoanDetails/NewLoanDetails'

Enzyme.configure({ adapter: new Adapter() })

describe('test NewLoan View', () => {
  it('testing NewLoanDetails have 1 children, 2 grant children and match snapshot', () => {
    const warpper = shallow(<NewLoanDetails />)
    expect(warpper.children.length).toBe(1)
    expect(warpper.children().children().length).toBe(2)
    expect(warpper).toMatchSnapshot()
  })
})
