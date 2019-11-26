import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import FloatingButton from '../../src/components/FloatingButton/FloatingButton'

Enzyme.configure({ adapter: new Adapter() })

const handlePress = () => {
  return {}
}

const icon = { type: 'MaterialIcons', name: 'done' }

describe('test NewLoan View', () => {
  it('testing FloatingButton', () => {
    const warpper = shallow(<FloatingButton handlePress={handlePress} icon={icon} text="test" />)
    expect(warpper).toMatchSnapshot()
  })
})
