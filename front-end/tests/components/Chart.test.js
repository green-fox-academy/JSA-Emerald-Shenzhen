import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import data from '../../helpers/mockData_FE'
import Chart from '../../src/components/LoanDetails/Chart'

const mockStore = configureStore([thunk])

describe('<Chart />', () => {
  it('<Chart /> should render correctly', () => {
    const store = mockStore({ loanList: data.detailedLoans, detailLoanId: 1 })
    const component = renderer.create(
      <Provider store={store}>
        <Chart />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
