import React from 'react'
import renderer from 'react-test-renderer'
import HistoryItem from '../../src/components/LoanDetails/HistoryItem'

const mockHistoryItemData = { amount: 4, text: 'text', date: '2019-01-01' }

describe('<HistoryItem />', () => {
  it('<HistoryItem > renders correctly', () => {
    const tree = renderer.create(<HistoryItem historyItem={mockHistoryItemData} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
