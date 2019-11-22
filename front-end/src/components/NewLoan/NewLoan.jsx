import React, { useState } from 'react'
import {
  Container,
  Content,
  Button,
  Icon,
  Form,
  Item,
  Input,
  Label,
  Card,
  Picker,
  Text
} from 'native-base'

import style from './NewLoanStyle'

import PaymentDetails from './PaymentDetails'
import ProductDescription from './ProductDescription'

export default function NewLoan() {
  const [selected, setSelected] = useState()

  return (
    <Container>
      <Content style={{ padding: 10 }}>
        <Form style={{ marginBottom: 10 }}>
          <Item stackedLabel last>
            <Label>How much do you need ?</Label>
            <Input />
          </Item>
          <Card transparent style={{ borderBottomColor: '#E3E3E3', borderBottomWidth: 1 }}>
            <Label style={{ fontSize: 15, margin: 10, marginLeft: 15 }}>Selected Product</Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Student loan"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              style={{ marginLeft: 10, marginRight: 10 }}
              selectedValue={selected}
              onValueChange={e => setSelected(e.target.value)}
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
      <Button rounded style={style.NextButton}>
        <Icon name="md-arrow-forward" />
        <Text style={style.NextButtonTitle}>NEXT</Text>
      </Button>
    </Container>
  )
}

NewLoan.navigationOptions = {
  title: 'New Loan'
}
