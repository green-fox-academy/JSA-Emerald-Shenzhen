import React from 'react'
import { View } from 'react-native'
import { Text, Icon } from 'native-base'
import PropTypes from 'prop-types'

import style from './HistoryItemStyle'

const HistoryItem = ({ trend }) => {
  const up = trend === 'up'

  return (
    <View style={style.body}>
      <View style={[style.circle, up ? style.up : style.down]}>
        <Icon type="Feather" name={`trending-${up ? 'up' : 'down'}`} style={style.icon} />
      </View>
      <View>
        <Text>$ 900 payment received</Text>
        <Text style={style.date}>2 days ago</Text>
      </View>
    </View>
  )
}

HistoryItem.propTypes = {
  trend: PropTypes.string.isRequired
}

export default HistoryItem
