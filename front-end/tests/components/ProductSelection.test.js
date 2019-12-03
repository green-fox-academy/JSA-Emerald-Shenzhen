import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import ProductSelection from '../../src/components/ProductSelection/ProductSelection'
import data from '../../helpers/mockData_FE'
import ACTION_TYPE from '../../src/lib/actionType'

const mockStore = configureStore([])

describe('<ProductSelection />', () => {
  let store
  let component
  let expectedPayload

  beforeEach(() => {
    store = mockStore({ productList: data.products, loanListLoading: false })
    expectedPayload = {
      type: ACTION_TYPE.INIT_PRODUCTLIST
    }

    store.dispatch = jest.fn()
  })
  it('<ProductSelection /> renders correctly', () => {
    component = renderer.create(
      <Provider store={store}>
        <ProductSelection />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
  it('<ProductSelection > has 1 child', () => {
    expect(component.toJSON().children.length).toBe(1)
  })
  it('<ProductSelection /> should dispatch an action when mounted', () => {
    renderer.act(() => {
      component = renderer.create(
        <Provider store={store}>
          <ProductSelection />
        </Provider>
      )
    })
    expect(store.dispatch).toBeCalledWith(expectedPayload)
  })
})
