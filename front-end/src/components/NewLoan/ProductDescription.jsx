import React from 'react'
import PropTypes from 'prop-types'
import { Body, Text, Card, CardItem, Icon } from 'native-base'

export default function ProductDescription({ rate }) {
  return (
    <Card>
      <CardItem style={{ backgroundColor: '#E8EAF6' }}>
        <Icon name="perm-contact-calendar" type="MaterialIcons" style={{ marginHorizontal: 15 }} />
        <Body>
          <Text style={{ fontSize: 18 }}>{`${rate * 100}% yearly interest rate`}</Text>
          <Text style={{ fontSize: 15, color: 'grey' }}>
            Fixed low interest rate for students only
          </Text>
        </Body>
        <Icon name="md-information-circle-outline" style={{ marginLeft: 10, right: -2 }} />
      </CardItem>
    </Card>
  )
}

ProductDescription.propTypes = {
  rate: PropTypes.number.isRequired
}
