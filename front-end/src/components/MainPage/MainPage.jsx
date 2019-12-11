import React from 'react'
import PropTypes from 'prop-types'
import { Container, Icon } from 'native-base'
import { View, TouchableOpacity } from 'react-native'

import style from './MainPageStyle'

const MainPage = ({ navigation }) => {
  const handlePress = name => {
    navigation.navigate(name)
  }

  return (
    <Container>
      <View style={style.content}>
        <TouchableOpacity onPress={() => handlePress('LoanList')}>
          <Icon type="MaterialCommunityIcons" name="glassdoor" style={style.icon} />
        </TouchableOpacity>
      </View>
    </Container>
  )
}

MainPage.navigationOptions = {
  title: 'Main page'
}

MainPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default MainPage
