import React from 'react'
import { Text, View, Image } from 'react-native'
import { style } from './LoanNavStyle'
import navImage from '../assets/nav.png'

function LoanNav() {
  return (
    <View style={style.navigator}>
      <Image source={navImage} />
      <Text style={style.navigatorText}>Loans</Text>
    </View>
  )
}
export { LoanNav }
