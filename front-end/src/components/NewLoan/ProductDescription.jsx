import React from 'react'
import PropTypes from 'prop-types'
import { Body, Text, Card, CardItem, Icon } from 'native-base'

export default function ProductDescription({ title }) {
  return (
    <Card>
      <CardItem style={{ backgroundColor: '#E8EAF6' }}>
        <Icon name="perm-contact-calendar" type="MaterialIcons" style={{ marginHorizontal: 15 }} />
        <Body>
          <Text style={{ fontSize: 17 }}>{title}</Text>
          <Text style={{ fontSize: 15, color: 'grey' }}>
            Fixed low interest title for students only
          </Text>
        </Body>
        <Icon name="md-information-circle-outline" style={{ marginLeft: 10, right: -2 }} />
      </CardItem>
    </Card>
  )
}

ProductDescription.propTypes = {
  title: PropTypes.string.isRequired
}
