import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Text, Icon, Button, View } from 'native-base'
import { NavigationContext } from 'react-navigation'
import { tinyStyle, extendStyle } from './ProductSelectionStyle'

export default function ProductCard({ product, isExtend }) {
  const navigation = useContext(NavigationContext)

  function handleSelectClick() {
    navigation.navigate('NewLoan', { product })
  }

  const { name, description } = product
  const style = isExtend ? extendStyle : tinyStyle

  return (
    <View style={style.card} opacity={isExtend ? 1 : 0.7}>
      <View style={style.context}>
        <Icon style={style.icon} name="person" />
        <View>
          <Text style={style.title}>{name}</Text>
          <Text>
            {!isExtend && description.length > 23
              ? `${description.substring(0, 32)}...`
              : description}
          </Text>
        </View>
      </View>
      <View style={{ ...style.show, ...style.buttonView }}>
        <Button
          style={style.button}
          onPress={() => {
            handleSelectClick()
          }}
        >
          <Text>SELECT</Text>
        </Button>
      </View>
    </View>
  )
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  isExtend: PropTypes.bool.isRequired
}
