import React, { useState } from 'react'
import { Container, Content, Icon, Form, Item, Input, Label, Card, Button, View } from 'native-base'
import PropTypes from 'prop-types'
import calculateLoan from '../../services/calculateLoan'

import style from './NewLoanStyle'
import PaymentDetails from './PaymentDetails'
import ProductDescription from './ProductDescription'
import FloatingButton from '../FloatingButton/FloatingButton'

export default function NewLoan({ navigation }) {
  const [amount, setAmount] = useState('')
  const amountNum = !Number.isNaN(Number(amount)) ? Number(amount) : 0

  const handlePress = () => {
    navigation.navigate('NewLoanDetail')
  }

  const product =
    navigation && navigation.state.params ? navigation.state.params.product : undefined

  const loan =
    product !== undefined
      ? calculateLoan(amountNum, 6, product.interest)
      : {
          monthly: 0,
          interest: 0
        }

  return (
    <Container>
      <Content style={style.newLoanContent}>
        <Form style={style.newLoanForm}>
          <Label style={style.fontLarger}>How much do you need ?</Label>
          <Item error={!amount ? false : !amountNum} style={{ marginRight: 20 }}>
            <Icon name="dollar" type="FontAwesome" />
            <Input
              keyboardType="numeric"
              autoFocus
              style={style.fontLarger}
              value={amount}
              onBlur={target => {
                console.log(target)

                setAmount(target.nativeEvent.text)
              }}
            />
          </Item>

          <Card transparent style={{ ...style.newLoanCard, display: amountNum ? 'flex' : 'none' }}>
            <Label style={style.cardLabel}>Selected Product</Label>
            <Button
              transparent
              onPress={() => {
                navigation.navigate('ProductSelection')
              }}
            >
              <Input disabled placeholder={product ? product.name : ''} />
              <Icon active name="caretdown" type="AntDesign" style={{ padding: 0 }} />
            </Button>
          </Card>

          <View style={{ display: product ? 'flex' : 'none' }}>
            <Item stackedLabel last>
              <Label>Duration</Label>
              <Item disabled>
                <Input disabled placeholder={product && product.duration} />
                <Icon name="md-information-circle-outline" style={{ marginRight: 20 }} />
              </Item>
            </Item>
          </View>
        </Form>
        <View style={{ display: product ? 'flex' : 'none' }}>
          <ProductDescription rate={product ? product.interest : 0} />
          <PaymentDetails monthly={loan.monthly} total={loan.interest} />
        </View>
      </Content>
      <FloatingButton
        icon={{ type: 'Ionicons', name: 'md-arrow-forward' }}
        text="Next"
        handlePress={handlePress}
      />
    </Container>
  )
}

NewLoan.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
}

NewLoan.defaultProps = {
  navigation: undefined
}

NewLoan.navigationOptions = {
  title: 'New Loan'
}
