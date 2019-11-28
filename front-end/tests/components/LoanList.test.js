import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import LoanList from '../../src/components/LoanList/LoanList'
import data from '../../helpers/mockData_FE'
import ACTION_TYPE from '../../src/lib/actionType'

const mockStore = configureStore([])

describe('<LoanList />', () => {
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

  it('<LoanList /> has 2 child', () => {
    expect(component.toJSON().children.length).toBe(2)
  })

  it('<LoanList /> should dispatch an action on button click', () => {
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
