import React from 'react'
import { View, FlatList } from 'react-native'
import { Text } from 'native-base'

import HistoryItem from './HistoryItem'
import style from './HistoryStyle'

const History = () => {
  return (
    <View>
      <Text style={style.title}>History</Text>
      <FlatList
        data={[{ key: 'up' }, { key: 'down' }]}
        renderItem={({ item }) => <HistoryItem trend={item.key} />}
      />
    </View>
  )
}

export default History
