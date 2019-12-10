import React, { useState } from 'react'
import { Container, Content, Icon, Form, Item, Input, Label, Card, Button, View } from 'native-base'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'
import calculateLoan from '../../services/calculateLoan'

import style from './NewLoanStyle'
import PaymentDetails from './PaymentDetails'
import ProductDescription from './ProductDescription'
import FloatingButton from '../FloatingButton/FloatingButton'

export default function NewLoan({ navigation }) {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState(false)
  const [amountNum, setAmountNum] = useState(0)

  const product = navigation.getParam('selectedProduct')

  const handlePress = () => {
    console.log({ productId: product.id, amount, duration: product.duration })
    navigation.navigate('NewLoanDetail', {
      productId: product.id,
      amount,
      duration: product.duration
    })
  }

  const loan =
    product !== undefined
      ? calculateLoan(amountNum, 6, product.interest / 100)
      : {
          monthly: 0,
          interest: 0
        }

  return (
    <Container>
      <Content style={style.newLoanContent}>
        <Form style={style.newLoanForm}>
          <Label style={style.fontLarger}>How much do you need ?</Label>
          <Item error={error} style={{ marginRight: 20 }}>
            <Icon style={{ fontSize: 30 }} name="dollar" type="FontAwesome" />
            <Input
              keyboardType="numeric"
              autoFocus
              style={{ fontSize: 38 }}
              value={amount}
              onChangeText={value => {
                setAmount(value)
                const isValue = !Number.isNaN(Number(value))
                setAmountNum(isValue ? Number(value) : 0)
                setError(!isValue)
              }}
            />
            <Icon style={{ display: error ? 'flex' : 'none' }} name="close-circle" />
          </Item>
          <Label style={{ display: error ? 'flex' : 'none', color: 'red' }}>
            * please enter correct number!
          </Label>

          <View style={{ display: !error && amountNum ? 'flex' : 'none' }}>
            <Label style={style.cardLabel}>Selected Product</Label>
            <Card transparent style={style.newLoanCard}>
              <Button
                transparent
                onPress={() => {
                  navigation.navigate('ProductSelection')
                }}
              >
                <Input disabled placeholder={product ? product.name : 'Please select a product'} />
                <Icon
                  active
                  name={Platform.OS === 'ios' ? 'down' : 'caretdown'}
                  type="AntDesign"
                  style={{ fontSize: Platform.OS === 'ios' ? 18 : 8, padding: 0, color: '#000' }}
                />
              </Button>
            </Card>
          </View>

          <View style={{ display: !error && product ? 'flex' : 'none' }}>
            <Item stackedLabel last>
              <Label>Duration</Label>
              <Item disabled>
                <Input disabled placeholder={product && product.duration} />
                <Icon name="md-information-circle-outline" style={{ marginRight: 20 }} />
              </Item>
            </Item>
          </View>
        </Form>
        <View style={{ display: !error && product ? 'flex' : 'none' }}>
          <ProductDescription title={product ? product.title : ''} />
          <PaymentDetails monthly={loan.monthly} total={loan.interest} />
        </View>
      </Content>
      <View style={{ display: !error && product ? 'flex' : 'none' }}>
        <FloatingButton
          icon={{ type: 'Ionicons', name: 'md-arrow-forward' }}
          text="Next"
          handlePress={handlePress}
        />
      </View>
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
