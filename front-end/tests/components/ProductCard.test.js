import React from 'react'
import renderer from 'react-test-renderer'
import ProductCard from '../../src/components/ProductSelection/ProductCard'

describe('<ProductCard />', () => {
  it('<ProductCard > has 2 child', () => {
    const tree = renderer
      .create(<ProductCard name="Student loans" description="description" isExtend={false} />)
      .toJSON()
    expect(tree.children.length).toBe(2)
  })
})
