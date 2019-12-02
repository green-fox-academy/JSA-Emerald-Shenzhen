import React, { useState } from 'react'
import { Container, Content, Icon, Form, Item, Input, Label, Card, Picker, View } from 'native-base'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import calculateLoan from '../../services/calculateLoan'

import style from './NewLoanStyle'
import PaymentDetails from './PaymentDetails'
import ProductDescription from './ProductDescription'
import FloatingButton from '../FloatingButton/FloatingButton'

export default function NewLoan({ navigation }) {
  const [amount, setAmount] = useState()

  let product
  if (navigation && navigation.state.params) {
    product = navigation.state.params.product
  }
  const handlePress = () => {
    navigation.navigate('NewLoanDetail')
  }

  let amountNum = 0
  if (!Number.isNaN(Number(amount))) {
    amountNum = Number(amount)
  }

  let loan
  if (product) {
    loan = calculateLoan(amountNum, 6, product.interest) // todo change to real month number
  } else {
    loan = {
      monthly: 0,
      interest: 0
    }
  }

  return (
    <Container>
      <Content style={style.newLoanContent}>
        <Form style={style.newLoanForm}>
          <Item stackedLabel last>
            <Label>How much do you need ?</Label>
            <Input value={amount} onChangeText={setAmount} />
          </Item>
          <Card transparent style={style.newLoanCard}>
            <Label style={style.cardLabel}>Selected Product</Label>
            {/* Picker may need to extract */}
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Please choose one product"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              style={{ marginLeft: 10, marginRight: 10 }}
              selectedValue="productName"
            >
              {product && <Picker.Item label={product.name} value="productName" />}
            </Picker>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '50%',
                position: 'absolute',
                bottom: 0
              }}
              onPress={() => {
                navigation.navigate('ProductSelection')
              }}
            />
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
