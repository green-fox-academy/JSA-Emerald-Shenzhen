import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ProductSelection from '../../src/components/ProductSelection/ProductSelection'
import data from '../../helpers/mockData_FE'
import { fetchProductList, ACTION_TYPE } from '../../src/lib/actions'

const mockStore = configureStore([thunk])

describe('<ProductSelection />', () => {
  let store
  let component
  let payloads

  beforeEach(() => {
    store = mockStore({ productList: data.products, loading: true })
    payloads = [
      {
        type: ACTION_TYPE.LOADING
      },
      {
        type: ACTION_TYPE.INIT_PRODUCTLIST
      },
      {
        type: ACTION_TYPE.INIT_PRODUCTLIST_SUCCESS,
        productList: {}
      },
      {
        type: ACTION_TYPE.LOADDONE
      }
    ]
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
  it('<ProductSelection /> should dispatch an action when mounted', async () => {
    renderer.act(() => {
      component = renderer.create(
        <Provider store={store}>
          <ProductSelection />
        </Provider>
      )
    })

    // eslint-disable-next-line no-undef
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({})
      })
    )

    await store.dispatch(fetchProductList())
    const actions = store.getActions()

    expect(actions.pop()).toEqual(payloads.pop())
    expect(actions.pop()).toEqual(payloads.pop())
    expect(actions.pop()).toEqual(payloads.pop())
    expect(actions.pop()).toEqual(payloads.pop())
  })
})
