import React from 'react'
import { View } from 'react-native'
import { style } from './AppStyle'
import { LoanHome } from './LoanHome/LoanHome'
import { LoanNav } from './LoanNav/LoanNav'

export default function App() {
  return (
    <View style={style.container}>
      <LoanNav />
      <LoanHome />

    </View>
  )
}
