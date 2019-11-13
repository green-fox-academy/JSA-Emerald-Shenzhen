import React from 'react'
import { Text, View, Image } from 'react-native'
import { style } from './LoanCardStyle'
import navImage from '../assets/nav.png'

function LoadCard() {
  return (
    <View style={style.loanCard}>
      <View style={style.loanCardUpPart}>
        <View>
          <Text style={style.loanId}>ID 123456</Text>
          <Text style={style.loanType}>Student loan</Text>
          <Text style={style.loanCurrentRate}>Current Interest rate: 3%</Text>
        </View>
        <View style={style.loadCardUpRemaining}>
          <Text style={style.loanPrice}>$ 3,500</Text>
          <Text style={style.loanRemaining}>remaining</Text>
        </View>
      </View>
      <View style={style.loanCardDownPart}>
        <Text>DETAILS</Text>
        <View style={style.loadCardDownPayNow}>
          <Image source={require('../assets/doller.png')} />
          <Text>PAY NOW</Text>
        </View>
      </View>
    </View>
  )
}

export { LoadCard }
