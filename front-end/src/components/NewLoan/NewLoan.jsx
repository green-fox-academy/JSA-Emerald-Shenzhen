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

  let pickerItem
  if (product) {
    pickerItem = <Picker.Item label={product.name} value="productName" />
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
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Please choose one product"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              {pickerItem}
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
