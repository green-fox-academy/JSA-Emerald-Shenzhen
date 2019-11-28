import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import LoanList from '../../src/components/LoanList/LoanList'
import data from '../../helpers/mockData_FE'
import ACTION_TYPE from '../../src/lib/actionType'

const mockStore = configureStore([])
// Enzyme.configure({ adapter: new Adapter() })

describe('<LoanList />', () => {
  // const fetchLoanList =  // () => ({ type: ACTION_TYPE.INIT_LOANLIST })
  let store
  let component
  let expectedPayload
  beforeEach(() => {
    store = mockStore({ loanList: data.loans, loanListLoading: false })
    expectedPayload = {
      type: ACTION_TYPE.INIT_LOANLIST
    }

    store.dispatch = jest.fn()
  })

  it('<LoanList /> renders correctly', () => {
    component = renderer.create(
      <Provider store={store}>
        <LoanList />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  // it('<LoanList /> has 2 child', () => {
  //   // const tree = renderer.create(<LoanList />).toJSON()
  //   expect(component.toJSON().children.length).toBe(2)
  // })

  it('<LoanList /> should dispatch an action on button click', () => {
    // renderer.update(component)
    renderer.act(() => {
      component = renderer.create(
        <Provider store={store}>
          <LoanList />
        </Provider>
      )
    })
    expect(store.dispatch).toBeCalledWith(expectedPayload)
  })
})
