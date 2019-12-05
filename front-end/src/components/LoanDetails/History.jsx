import React from 'react'
import { View, FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'

import HistoryItem from './HistoryItem'
import style from './HistoryStyle'

const History = ({ loan }) => {
  return (
    <View style={style.body}>
      {loan.history ? (
        <>
          <Text style={style.title}>History</Text>
          <FlatList
            data={loan.history}
            renderItem={({ item }) => <HistoryItem historyItem={item} />}
            keyExtractor={(_, index) => index.toString()}
          />
        </>
      ) : (
        <View style={style.warning}>
          <Text style={style.warningText}>No available records now</Text>
        </View>
      )}
    </View>
  )
}

History.propTypes = {
  loan: PropTypes.shape({
    history: PropTypes.array
  }).isRequired
}

export default History
