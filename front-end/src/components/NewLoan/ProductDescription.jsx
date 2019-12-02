import React from 'react'
import PropTypes from 'prop-types'
import { Body, Text, Card, CardItem, Icon } from 'native-base'

export default function ProductDescription({ rate }) {
  return (
    <Card>
      <CardItem style={{ backgroundColor: '#E8EAF6' }}>
        <Icon name="md-calendar" />
        <Body>
          <Text>{rate * 100}</Text>
          <Text>% yearly interest rate</Text>
          <Text>Fixed low interest rate for students only</Text>
        </Body>
        <Icon name="md-information-circle" />
      </CardItem>
    </Card>
  )
}

ProductDescription.propTypes = {
  rate: PropTypes.number.isRequired
}
