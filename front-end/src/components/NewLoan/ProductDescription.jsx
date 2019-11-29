import React from 'react'
import { Body, Text, Card, CardItem, Icon } from 'native-base'

export default function ProductDescription({ rate }) {
  return (
    <Card>
      <CardItem style={{ backgroundColor: '#E8EAF6' }}>
        <Icon name="md-calendar" />
        <Body>
          <Text>{rate * 100}% yearly interest rate</Text>
          <Text>Fixed low interest rate for students only</Text>
        </Body>
        <Icon name="md-information-circle" />
      </CardItem>
    </Card>
  )
}
