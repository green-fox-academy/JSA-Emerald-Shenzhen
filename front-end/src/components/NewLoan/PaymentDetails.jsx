import React from 'react'
import { Text } from 'react-native'
import { Body, Card, CardItem } from 'native-base'

export default function PaymentDetails() {
  return (
    <Card transparent>
      <CardItem>
        <Body>
          <Text style={{ fontSize: 50 }}>$ 86.84</Text>
          <Text>paid monthly</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Text style={{ fontSize: 30 }}>$ 390.61</Text>
          <Text>interest paid altogether</Text>
        </Body>
      </CardItem>
    </Card>
  )
}
