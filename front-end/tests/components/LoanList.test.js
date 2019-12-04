import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import LoanList from '../../src/components/LoanList/LoanList'
import data from '../../helpers/mockData_FE'
import { fetchLoanList, ACTION_TYPE } from '../../src/lib/actions'

const mockStore = configureStore([thunk])

describe('<LoanList />', () => {
  let store
  let component
  let payloads
  beforeEach(() => {
    store = mockStore({ loans: { loanList: data.loans }, loading: true })

    payloads = [
      {
        type: ACTION_TYPE.LOADING
      },
      {
        type: ACTION_TYPE.INIT_LOANLIST
      },
      {
        type: ACTION_TYPE.INIT_LOANLIST_SUCCESS,
        loanList: {}
      },
      {
        type: ACTION_TYPE.LOADDONE
      }
    ]
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
    expect(component.toJSON().children.length).toBe(1)
  })

  it('<LoanList /> should dispatch an action when mounted', async () => {
    renderer.act(() => {
      component = renderer.create(
        <Provider store={store}>
          <LoanList />
        </Provider>
      )
    })

    // eslint-disable-next-line no-undef
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({})
      })
    )

    await store.dispatch(fetchLoanList())
    const actions = store.getActions()

    expect(actions.pop()).toEqual(payloads.pop())
    expect(actions.pop()).toEqual(payloads.pop())
    expect(actions.pop()).toEqual(payloads.pop())
    expect(actions.pop()).toEqual(payloads.pop())
  })
})
