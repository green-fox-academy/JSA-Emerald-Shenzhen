import React from 'react'
import renderer from 'react-test-renderer'
import data from '../../helpers/fakeProductsData'
import ProductSelection from '../../src/components/ProductSelection/ProductSelection'

describe('<ProductSelection />', () => {
  it('<ProductSelection > has 1 child', () => {
    const tree = renderer.create(<ProductSelection products={data.products} />).toJSON()
    expect(tree.children.length).toBe(1)
  })
})
