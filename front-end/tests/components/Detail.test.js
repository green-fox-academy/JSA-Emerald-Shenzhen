import React from 'react'
import renderer from 'react-test-renderer'
import { NavigationContext } from 'react-navigation'
import Detail from '../../src/components/LoanDetails/Detail'

describe('<Detail />', () => {
  it('<Detail > renders correctly', () => {
    const mockGetParam = jest.fn()
    mockGetParam.mockReturnValue({ id: 1, type: 'mockType', remaining: 200 })

    const tree = renderer
      .create(
        <NavigationContext.Provider value={{ getParam: mockGetParam }}>
          <Detail />
        </NavigationContext.Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
