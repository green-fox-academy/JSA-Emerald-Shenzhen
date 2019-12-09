import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import LoanCard from '../../src/components/LoanList/LoanCard/LoanCard'

const mockStore = configureStore([thunk])

describe('<LoanCard />', () => {
  it('<LoanCard /> should render correctly', () => {
    const setId = jest.fn()
    const store = mockStore({ setId })
    const loan = { id: 1, type: { name: 'mockType' }, remaining: 200 }

    const component = renderer.create(
      <Provider store={store}>
        <LoanCard loan={loan} />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
