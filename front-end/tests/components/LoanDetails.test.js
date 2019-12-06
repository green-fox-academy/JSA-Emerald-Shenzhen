import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { NavigationContext } from 'react-navigation'
import configureStore from 'redux-mock-store'

import data from '../../helpers/mockData_FE'
import { fetchDetail, ACTION_TYPE } from '../../src/lib/actions'
import LoanDetails from '../../src/components/LoanDetails/LoanDetails'

const mockStore = configureStore([thunk])

describe('<LoanDetails />', () => {
  let store
  let component
  let payloads
  beforeEach(() => {
    store = mockStore({ loanList: data.detailedLoans, loading: true })

    payloads = [
      {
        type: ACTION_TYPE.LOADING
      },
      {
        type: ACTION_TYPE.INIT_DETAIL
      },
      {
        type: ACTION_TYPE.INIT_DETAIL_SUCCESS,
        loanList: []
      },
      {
        type: ACTION_TYPE.LOADDONE
      }
    ]
  })

  const mockGetParam = jest.fn()
  mockGetParam.mockReturnValue({ id: 1, type: { name: 'mockType' }, remaining: 200 })

  it('<LoanDetails /> should render correctly', () => {
    component = renderer.create(
      <NavigationContext.Provider value={{ getParam: mockGetParam }}>
        <Provider store={store}>
          <LoanDetails />
        </Provider>
      </NavigationContext.Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('<LoanDetails /> should dispatch an action when mounted', async () => {
    renderer.act(() => {
      component = renderer.create(
        <NavigationContext.Provider value={{ getParam: mockGetParam }}>
          <Provider store={store}>
            <LoanDetails />
          </Provider>
        </NavigationContext.Provider>
      )
    })

    // eslint-disable-next-line no-undef
    globalThis.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({})
      })
    )
    await store.dispatch(fetchDetail())
    const actions = store.getActions()

    expect(actions.pop()).toStrictEqual(payloads.pop())
  })
})
