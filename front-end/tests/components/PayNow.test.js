import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import PayNow from '../../src/components/PayNow/PayNow'

Enzyme.configure({ adapter: new Adapter() })

describe('test PayNow View', () => {
  it('should render a Header, a form of 2 input fields, 1 picker button which redirect to another page and a button', () => {
    shallow(<PayNow />)
  })
})

