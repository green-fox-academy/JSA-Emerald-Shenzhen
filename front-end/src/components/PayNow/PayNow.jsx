import React, { useContext, useState } from 'react'
import { NavigationContext } from 'react-navigation'
import { View } from 'react-native'
import { Container, DatePicker, Content, Form, Input, Item, Label, Icon, Picker } from 'native-base'
import FloatingButton from '../FloatingButton/FloatingButton'

export default function PayNow() {
  const navigation = useContext(NavigationContext)
  const handlePress = () => {
    navigation.navigate('')
  }

  const [error, setError] = useState(false)
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState()
  const [selectedAccount, setSelectedAccount] = useState()

  const icon = (
    <Icon active name="down" type="AntDesign" style={{ fontSize: 18, padding: 0, color: '#000' }} />
  )

  const handleChangeText = value => {
    setAmount(value)
    setError(!value || Number.isNaN(Number(value)))
  }

  const selectAnAccount = value => {
    setSelectedAccount(value)
  }

  return (
    <Container>
      <Content style={{ padding: 15 }}>
        <Form style={{ marginRight: 20 }}>
          <Label style={{ fontSize: 35 }}>How much to pay ?</Label>
          <Item error={error}>
            <Icon style={{ fontSize: 30 }} name="dollar" type="FontAwesome" />
            <Input
              style={{ fontSize: 38 }}
              placeholderTextColor="#ABABAB"
              keyboardType="numeric"
              value={amount}
              onChangeText={handleChangeText}
              autoFocus
            />
            <Icon style={{ display: error ? 'flex' : 'none' }} name="close-circle" />
          </Item>
          <Label style={{ display: error ? 'flex' : 'none', color: 'red' }}>
            * please enter correct number!
          </Label>
          <View
            style={{
              width: '100%',
              display: !error && amount ? 'flex' : 'none'
            }}
          >
            <Label style={{ fontSize: 20, marginTop: 10 }}>Account to pay from</Label>
            <View style={{ borderBottomColor: '#E3E3E3', borderBottomWidth: 1, marginLeft: 10 }}>
              <Picker
                style={{ flex: 1, margin: 0 }}
                mode="dropdown"
                iosHeader="Select your Account"
                iosIcon={icon}
                placeholder="Select your Account"
                placeholderStyle={{ fontSize: 18, color: '#777777' }}
                selectedValue={selectedAccount}
                onValueChange={selectAnAccount}
              >
                <Picker.Item label="Main account" value="Main account" />
                <Picker.Item label="Savings account" value="Savings account" />
                <Picker.Item label="Investment account" value="Investment account" />
              </Picker>
            </View>
            <Label style={{ fontSize: 20, marginTop: 10 }}>When</Label>
            <Item>
              <DatePicker
                defaultDate={date}
                minimumDate={new Date()}
                maximumDate={new Date(2020, 12, 12)}
                locale="en"
                onDateChange={setDate}
                modalTransparent={false}
                animationType="fade"
                androidMode="default"
                placeHolderText="Tap to select a date"
                textStyle={{ fontSize: 18, color: '#777777' }}
                placeHolderTextStyle={{ fontSize: 18, color: '#777777' }}
                disabled={false}
              />
            </Item>
          </View>
        </Form>
      </Content>
      <FloatingButton
        icon={{ type: 'Ionicons', name: 'md-arrow-forward' }}
        text="PAY"
        handlePress={handlePress}
      />
    </Container>
  )
}

PayNow.navigationOptions = {
  title: 'Pay now'
}
