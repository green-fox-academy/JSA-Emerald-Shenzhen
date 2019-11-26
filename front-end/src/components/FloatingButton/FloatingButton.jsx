import React from 'react'
import { Text } from 'react-native'
import { Button, Icon } from 'native-base'
import PropTypes from 'prop-types'
import style from './FloatingButtonStyle'

function FloatingButton({ handlePress, buttonStyle, text, icon }) {
  return (
    <Button
      onPress={handlePress}
      rounded
      style={{
        ...style.button,
        width: buttonStyle.width ? buttonStyle.width : style.button.width,
        backgroundColor: buttonStyle.backgroundColor
          ? buttonStyle.backgroundColor
          : style.button.backgroundColor
      }}
    >
      <Icon style={style.buttonIcon} type={icon.type} name={icon.name} />
      <Text style={style.buttonTitle}>{text}</Text>
    </Button>
  )
}
FloatingButton.defaultProps = {
  buttonStyle: {}
}
FloatingButton.propTypes = {
  handlePress: PropTypes.func.isRequired,
  icon: PropTypes.objectOf(PropTypes.any).isRequired,
  text: PropTypes.string.isRequired,
  buttonStyle: PropTypes.objectOf(PropTypes.any)
}
export default FloatingButton
