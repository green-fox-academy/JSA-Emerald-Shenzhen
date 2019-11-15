import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text, Button, Left, Body, Right } from 'native-base'
import { style } from './LoanCardStyle'

function LoadCard({ loan }) {
  return (
    <Card style={{ flex: 0 }}>
      <CardItem style={style.loanCardUpPart}>
        <Body>
          <Text style={style.loanId}>ID {loan.loan_id}</Text>
          <Text style={style.loanType}>{loan.loan_type}</Text>
          <Text style={style.loanCurrentRate}>Current Interest rate: {loan.loan_rate}%</Text>
          <Text style={style.loanPrice}>$ {loan.loan_remaining}</Text>
          <Text style={style.loanRemaining}>remaining</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Text>DETAILS</Text>
        </Left>
        <Right>
          <Button onPress={() => alert('no money....')} transparent>
            <Image style={style.payNowButtonImg} source={require('../assets/doller.png')} />
            <Text style={style.payNowButtonText}>PAY NOW</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  )
}

export { LoadCard }
