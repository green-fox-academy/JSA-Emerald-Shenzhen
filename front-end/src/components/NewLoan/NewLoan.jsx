import React, { useState, useContext } from 'react'
import { NavigationContext } from 'react-navigation'
import { Content, Icon, Form, Item, Input, Label, Card, Picker, Container } from 'native-base'
import style from './NewLoanStyle'
import PaymentDetails from './PaymentDetails'
import ProductDescription from './ProductDescription'
import FloatingButton from '../FloatingButton/FloatingButton'

export default function NewLoan() {
  const [selected, setSelected] = useState()
  const navigation = useContext(NavigationContext)
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
              placeholder="Student loan"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              style={{ marginLeft: 10, marginRight: 10 }}
              selectedValue={selected}
              onValueChange={value => setSelected(value)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
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

NewLoan.navigationOptions = {
  title: 'New Loan'
}
