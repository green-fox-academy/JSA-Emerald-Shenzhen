import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'

describe('<App />', () => {
  // it('<App> renders correctly', () => {
  //   expect(tree).toMatchSnapshot()
  // })
  // it('<App> has 2 child', () => {
  //   const tree = renderer.create(<App />).toJSON()
  //   console.log(tree.children)

  //   expect(tree.children.length).toBe(1)
  // })
  it('<App> has 2 child', () => {
    const tree = renderer.create(<App />).toJSON()
    console.log(tree.children)

    expect(tree.children.length).toBe(2)
  })
})
