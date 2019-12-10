import React from 'react'
import { View } from 'react-native'
import { Text, Icon } from 'native-base'
import PropTypes from 'prop-types'

import style from './HistoryItemStyle'

const HistoryItem = ({ historyItem }) => {
  return (
    <View style={style.body}>
      <View style={[style.circle, historyItem.amount > 0 ? style.up : style.down]}>
        <Icon
          type="Feather"
          name={`trending-${historyItem.amount > 0 ? 'up' : 'down'}`}
          style={style.icon}
        />
      </View>
      <View>
        <Text>{historyItem.text}</Text>
        <Text style={style.date}>{historyItem.date}</Text>
      </View>
    </View>
  )
}

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    amount: PropTypes.number,
    text: PropTypes.string,
    date: PropTypes.string
  }).isRequired
}

export default HistoryItem
