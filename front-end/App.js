import React from 'react'
import { View } from 'react-native'
import { style } from './AppStyle'
import { LoanHome } from './LoanHome/LoanHome'
import { LoanNav } from './LoanNav/LoanNav'
import { loanList } from './fakeLoanData'

export default function App() {
  return (
    <View style={style.container}>
      <LoanNav />
      <LoanHome loanList={loanList.loans} />
    </View>
  )
}
