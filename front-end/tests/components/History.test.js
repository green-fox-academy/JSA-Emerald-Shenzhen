import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import data from '../../helpers/mockData_FE'
import History from '../../src/components/LoanDetails/History'

const mockStore = configureStore([thunk])

describe('<History />', () => {
  it('<History /> should render correctly', () => {
    const store = mockStore({ loanList: data.detailedLoans, detailLoanId: 1 })
    const component = renderer.create(
      <Provider store={store}>
        <History />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
