import React, { useContext } from 'react'
import { NavigationContext } from 'react-navigation'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { Card, CardItem, Text, Button, Left, Body, Right } from 'native-base'
import style from './LoanCardStyle'

const source = require('../../../../assets/doller.png')

function LoadCard({ loan }) {
  const navigation = useContext(NavigationContext)

  return (
    <Card style={{ flex: 0 }}>
      <CardItem style={style.loanCardUpPart}>
        <Body>
          <Text style={style.loanId}>
            ID
            {loan.type.id}
          </Text>
          <Text style={style.loanType}>{loan.type.name}</Text>
          <Text style={style.interest}>{`Current Interest rate: ${loan.type.interest}%`}</Text>
          <Text style={style.loanPrice}>{`$ ${loan.remaining}`}</Text>
          <Text style={style.loanRemaining}>remaining</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Text>DETAILS</Text>
        </Left>
        <Right>
          <Button
            transparent
            onPress={() => {
              navigation.navigate('PayNow')
            }}
          >
            <Image style={style.payNowButtonImg} source={source} />
            <Text style={style.payNowButtonText}>PAY NOW</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  )
}

LoadCard.propTypes = {
  loan: PropTypes.objectOf(PropTypes.any).isRequired
}
export default LoadCard
