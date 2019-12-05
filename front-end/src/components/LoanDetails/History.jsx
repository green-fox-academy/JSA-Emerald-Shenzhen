import React from 'react'
import { View, FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'

import HistoryItem from './HistoryItem'
import style from './HistoryStyle'

const History = ({ loan }) => {
  return loan.history ? (
    <View style={style.body}>
      <Text style={style.title}>History</Text>
      <FlatList data={loan.history} renderItem={({ item }) => <HistoryItem historyItem={item} />} />
    </View>
  ) : (
    <Text>No records about this loan</Text>
  )
}

History.propTypes = {
  loan: PropTypes.shape({
    history: PropTypes.array
  }).isRequired
}

export default History
