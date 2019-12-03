import React, { useContext, useState } from 'react'
import { NavigationContext } from 'react-navigation'
import { View, Text } from 'react-native'
import { Container, Content, Form, Input, Item, Label, Icon, Button } from 'native-base'

import FloatingButton from '../FloatingButton/FloatingButton'

export default function PayNow() {
  const navigation = useContext(NavigationContext)
  const handlePress = () => {
    navigation.navigate('')
  }

  const [amount, setAmount] = useState()
  const [toShowPopUpSection, setToShowPopUpSection] = useState(false)

  const handleChangeText = text => {
    setAmount(text)
    if (text.length >= 1) {
      if (!Number.isNaN(Number(text))) {
        setToShowPopUpSection(true)
      } else {
        setToShowPopUpSection(false)
      }
    } else {
      setToShowPopUpSection(false)
    }
  }

  const account =
    navigation && navigation.state.params ? navigation.state.params.account : undefined

  return (
    <Container>
      <Content>
        <Form style={{ marginRight: 20 }}>
          <Item stackedLabel>
            <Label style={{ fontSize: 35 }}>How much to pay ?</Label>
            <View
              style={{ display: 'flex', flexDirection: 'row', marginLeft: 10, marginRight: 10 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  marginRight: 5,
                  textAlignVertical: 'center'
                }}
              >
                $
              </Text>
              <Input
                placeholder="500"
                placeholderTextColor="#ABABAB"
                keyboardType="numeric"
                value={amount}
                onChangeText={text => handleChangeText(text)}
                autoFocus
              />
            </View>
          </Item>
          <View style={{ display: toShowPopUpSection ? 'flex' : 'none' }}>
            <Item stackedLabel>
              <Label style={{ fontSize: 20, marginBottom: 20, marginTop: 10 }}>
                Account to pay from
              </Label>
              <Button
                transparent
                onPress={() => {
                  navigation.navigate('AccountSelection')
                }}
              >
                <Input disabled placeholder={account ? account.name : ''} />
                <Icon active name="caretdown" type="AntDesign" style={{ padding: 0 }} />
              </Button>
            </Item>
            <Item stackedLabel>
              <Label style={{ fontSize: 20, marginBottom: 20, marginTop: 10 }}>When</Label>
              <Input placeholder="Now" placeholderTextColor="#ABABAB" />
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
