import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import data from '../../helpers/mockData_FE'
import Detail from '../../src/components/LoanDetails/Detail'

const mockStore = configureStore([thunk])

describe('<Detail />', () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({ loanList: data.detailedLoans, detailLoanId: 1, loading: true })
  })

  it('<LoanDetails /> should render correctly', () => {
    component = renderer.create(
      <Provider store={store}>
        <Detail />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
