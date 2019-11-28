import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import LoanList from '../../src/components/LoanList/LoanList'
import data from '../../helpers/mockData_FE'
import ACTION_TYPE from '../../src/lib/actionType'

const mockStore = configureStore([])

describe('<LoanList />', () => {
  const initLoanList = () => ({ type: ACTION_TYPE.INIT_LOANLIST })
  let store
  let component
  beforeEach(() => {
    store = mockStore({ loanList: data.loans, loanListLoading: false })
    store.dispatch(initLoanList())
    component = renderer.create(
      <Provider store={store}>
        <LoanList />
      </Provider>
    )
  })

  it('<LoanList /> renders correctly', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('<LoanList /> has 2 child', () => {
    // const tree = renderer.create(<LoanList />).toJSON()
    expect(component.toJSON().children.length).toBe(2)
  })

  it('<LoanList /> should dispatch an action on button click', () => {
    expect(store.getActions()).toEqual([{ type: ACTION_TYPE.INIT_LOANLIST }])
  })
})
