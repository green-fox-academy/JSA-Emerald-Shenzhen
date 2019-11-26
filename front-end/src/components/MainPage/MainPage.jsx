import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Button, Text } from 'native-base'

const MainPage = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('LoanList')
  }

  return (
    <Container>
      <Content>
        <Button onPress={handlePress}>
          <Text>Go to the homepage of Loan Section</Text>
        </Button>
      </Content>
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
