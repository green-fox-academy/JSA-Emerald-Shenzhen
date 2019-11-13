import React from 'react'
import { View } from 'react-native'
import { style } from './AppStyle'
import { LoanHome } from './LoanHome/LoanHome'
export default function App() {
  return (
    <View style={style.container}>
      <LoanHome />
    </View>
  )
}
