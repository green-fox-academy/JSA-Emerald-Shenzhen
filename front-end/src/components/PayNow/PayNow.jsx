import React, { useContext, useState } from 'react'
import { NavigationContext } from 'react-navigation'
import { Container, Content, Form, Item, Input, Label } from 'native-base'

import FloatingButton from '../FloatingButton/FloatingButton'

export default function PayNow() {
  const navigation = useContext(NavigationContext)
  const handlePress = () => {
    navigation.navigate('')
  }

  const [amount, setAmount] = useState()

  return (
    <Container>
      <Content>
        <Form>
          <Item stackedLabel last>
            <Label>How much to pay ?</Label>
            <Input value={amount} onChangeText={setAmount} />
          </Item>
        </Form>
      </Content>
      <FloatingButton
        icon={{ type: 'Ionicons', name: 'md-arrow-forward' }}
        text="Next"
        handlePress={handlePress}
      />
    </Container>
  )
}
