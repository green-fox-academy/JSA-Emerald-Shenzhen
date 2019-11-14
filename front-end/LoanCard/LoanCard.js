import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { style } from './LoanCardStyle'

function LoadCard({ loan }) {
  return (
    <View style={style.loanCard}>
      <View style={style.loanCardUpPart}>
        <View>
          <Text style={style.loanId}>ID {loan.loan_id}</Text>
          <Text style={style.loanType}>{loan.loan_type}</Text>
          <Text style={style.loanCurrentRate}>Current Interest rate: {loan.loan_rate}%</Text>
        </View>
        <View style={style.loadCardUpRemaining}>
          <Text style={style.loanPrice}>$ {loan.loan_remaining}</Text>
          <Text style={style.loanRemaining}>remaining</Text>
        </View>
      </View>
      <View style={style.loanCardDownPart}>
        <Text>DETAILS</Text>
        <View>
          {
            <TouchableOpacity onPress={() => alert("no money....")} activeOpacity={0.5} style={style.payNowButton}>
              <Image source={require('../assets/doller.png')} />
              <Text>PAY NOW</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  )
}

export { LoadCard }
