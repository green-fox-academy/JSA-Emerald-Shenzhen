import React from 'react'
import renderer from 'react-test-renderer'
import ProductCard from '../../src/components/ProductSelection/ProductCard'
import data from '../../helpers/mockData_FE'

describe('<ProductCard />', () => {
  it('<ProductCard > has 2 child', () => {
    const tree = renderer
      .create(<ProductCard product={data.products[0]} isExtend={false} />)
      .toJSON()
    expect(tree.children.length).toBe(2)
  })
})
