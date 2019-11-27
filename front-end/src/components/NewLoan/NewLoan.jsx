import React from 'react'
import { Container, Content, Icon, Form, Item, Input, Label, Card, Picker } from 'native-base'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import style from './NewLoanStyle'
import PaymentDetails from './PaymentDetails'
import ProductDescription from './ProductDescription'
import FloatingButton from '../FloatingButton/FloatingButton'

export default function NewLoan({ navigation }) {
  let productName
  if (navigation && navigation.state.params) {
    productName = navigation.state.params.productName
  }
  const handlePress = () => {
    navigation.navigate('NewLoanDetail')
  }

  return (
    <Container>
      <Content style={style.newLoanContent}>
        <Form style={style.newLoanForm}>
          <Item stackedLabel last>
            <Label>How much do you need ?</Label>
            <Input />
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
              {productName && <Picker.Item label={productName} value="productName" />}
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
          <Item stackedLabel last>
            <Label>Duration</Label>
            <Item disabled>
              <Input disabled placeholder="5 years fixed" />
              <Icon name="information-circle" style={{ marginRight: 25 }} />
            </Item>
          </Item>
        </Form>
        <ProductDescription />
        <PaymentDetails />
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
