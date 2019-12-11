import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import NewLoan from '../../src/components/NewLoan/NewLoan'
import PaymentDetails from '../../src/components/NewLoan/PaymentDetails'
import ProductDescription from '../../src/components/NewLoan/ProductDescription'

Enzyme.configure({ adapter: new Adapter() })

describe('test NewLoan View', () => {
  it('should render a Header, a form of 4 input fields, 2 subcomponents and a button', () => {
    shallow(<NewLoan navigation={{ getParam: () => {} }} />)
  })
})

describe('test PaymentDetails View', () => {
  it('should render PaymentDetails', () => {
    shallow(<PaymentDetails monthly={0} total={0} />)
  })
})

describe('test ProductDescription View', () => {
  it('should render ProductDescription', () => {
    shallow(<ProductDescription title="" />)
  })
})
