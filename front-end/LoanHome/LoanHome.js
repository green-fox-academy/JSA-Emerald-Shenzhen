import React from 'react'
import { Text, View, Image } from 'react-native'
import { style } from './LoanHomeStyle'
import navImage from '../assets/nav.png'
import { LoadCard } from '../LoanCard/LoanCard'

function LoanHome() {
  return (
    <View style={style.loanHome}>
      <View style={style.navigator}>
        <Image source={navImage} />
        <Text style={style.navigatorText}>Loans</Text>
      </View>
      <Text style={style.header}>Current active contracts</Text>
      <LoadCard />
      <LoadCard />
    </View>
  )
}

export { LoanHome }
