import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import data from '../../helpers/mockData_FE'
import { fetchDetail, ACTION_TYPE } from '../../src/lib/actions'
import LoanDetails from '../../src/components/LoanDetails/LoanDetails'

const mockStore = configureStore([thunk])

describe('<LoanDetails />', () => {
  let component
  let payloads
  const store = mockStore({ detailLoanId: 1, loanList: data.detailedLoans, loading: true })
  beforeEach(() => {
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
      <Provider store={store}>
        <LoanDetails />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('<LoanDetails /> should dispatch an action when mounted', async () => {
    renderer.act(() => {
      component = renderer.create(
        <Provider store={store}>
          <LoanDetails />
        </Provider>
      )
    })

    // eslint-disable-next-line no-undef
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({})
      })
    )
    await store.dispatch(fetchDetail())
    const actions = store.getActions()

    expect(actions.pop()).toStrictEqual(payloads.pop())
  })
})
