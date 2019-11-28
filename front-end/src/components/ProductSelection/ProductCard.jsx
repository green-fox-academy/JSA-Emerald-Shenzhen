import React, { useContext } from 'react'
import { Text, Icon, Button, View } from 'native-base'
import PropTypes from 'prop-types'

import { NavigationContext } from 'react-navigation'
import { tinyStyle, extendStyle } from './ProductSelectionStyle'

export default function ProductCard(props) {
  const navigation = useContext(NavigationContext)

  function handleSelectClick(productName) {
    navigation.navigate('NewLoan', { productName })
  }

  let { description } = props
  const { name } = props
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
            handleSelectClick(name)
          }}
        >
          <Text>SELECT</Text>
        </Button>
      </View>
    </View>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isExtend: PropTypes.bool.isRequired
}
