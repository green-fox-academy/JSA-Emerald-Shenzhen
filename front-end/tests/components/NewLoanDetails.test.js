import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import NewLoanDetails from '../../src/components/NewLoanDetails/NewLoanDetails'

Enzyme.configure({ adapter: new Adapter() })
const mockStore = configureStore([thunk])

describe('test NewLoan View', () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({})
  })
  it('testing NewLoanDetails have 1 children, 2 grant children and match snapshot', () => {
    component = shallow(
      <Provider store={store}>
        <NewLoanDetails />
      </Provider>
    )
    expect(component).toMatchSnapshot()
  })
})
