import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Content, Container } from 'native-base'
// import FloatingButton from '../FloatingButton/FloatingButton'

export default function ProcessingLoan({ navigation }) {
  // const handlePress = () => {
  //   navigation.navigate('LoanList', {
  //     productId: navigation.getParam('productId'),
  //     amount: navigation.getParam('amount'),
  //     duration: navigation.getParam('duration'),
  //     monthlyPay: navigation.getParam('monthlyPay'),
  //     receivingAccount: navigation.getParam('receivingAccount'),
  //     defaultPayment: navigation.getParam('defaultPayment')
  //   })
  // }
  return (
    <Container>
      <Content>
        <View>
          <Text>{`$ ${navigation.getParam('amount')}.`}</Text>
        </View>
      </Content>
    </Container>
  )
}
ProcessingLoan.navigationOptions = {
  title: 'New Loan Details'
}

ProcessingLoan.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
}

ProcessingLoan.defaultProps = {
  navigation: undefined
}
