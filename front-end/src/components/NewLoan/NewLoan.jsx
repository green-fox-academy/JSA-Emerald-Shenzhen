import React, { useState } from 'react'
import { StyleSheet, Text, Platform } from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Content,
  Button,
  Icon,
  Form,
  Item,
  Input,
  Label,
  Card,
  Picker
} from 'native-base'

import PaymentDetails from './PaymentDetails'
import ProductDescription from './ProductDescription'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0
  },
  Header: {
    marginTop: Platform.OS === 'ios' ? 20 : 20,
    backgroundColor: '#3796F3'
  },
  NextButton: {
    flex: 1,
    alignSelf: 'flex-end',
    maxHeight: 100,
    minHeight: 70,
    backgroundColor: '#F66F43',
    width: 150,
    height: 70,
    borderRadius: 35,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    marginRight: 10,
    position: 'absolute',
    bottom: 13,
    right: 5
  },
  NextButtonTitle: {
    fontSize: 25,
    color: 'white'
  }
})

export default function NewLoan() {
  const [selected, setSelected] = useState()

  return (
    <Container style={styles.container}>
      <Header style={styles.Header}>
        <Left style={{ maxWidth: '15%' }}>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>New Loan</Title>
        </Body>
      </Header>
      <Content style={{ padding: 10 }} contentContainerStyle={{ justifyContent: 'space-between' }}>
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
      <Button rounded style={styles.NextButton}>
        <Icon name="md-arrow-forward" />
        <Text style={styles.NextButtonTitle}>NEXT</Text>
      </Button>
    </Container>
  )
}
