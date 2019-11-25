import React from 'react'
import { Text, Icon, Button, View } from 'native-base'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'

import { tinyStyle, extendStyle } from './ProductSelectionStyle'

export default function ProductCard(props) {
  function handleSelectClick(id) {
    Alert.alert(`${id} is clicked!`)
  }

  let { description } = props
  const { id, name } = props
  const { isExtend } = props

  const style = isExtend ? extendStyle : tinyStyle

  if (!isExtend && description.length > 23) {
    description = `${description.substring(0, 32)}...`
  }

  return (
    <View style={style.card} opacity={isExtend ? 1 : 0.7}>
      <View style={style.context}>
        <Icon style={style.icon} name="person" />
        <View>
          <Text style={style.title}>{name}</Text>
          <Text>{description}</Text>
        </View>
      </View>
      <View style={{ ...style.show, ...style.buttonView }}>
        <Button
          style={style.button}
          onPress={() => {
            handleSelectClick(id)
          }}
        >
          <Text>SELECT</Text>
        </Button>
      </View>
    </View>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isExtend: PropTypes.bool.isRequired
}
