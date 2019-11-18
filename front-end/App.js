import React, { useEffect, useState } from 'react'
import { style } from './AppStyle'
import { LoanHome } from './LoanHome/LoanHome'
import { LoanNav } from './LoanNav/LoanNav'
import { loanList } from './fakeLoanData'
import { AppLoading } from 'expo'
import { Container } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

export default function App() {
  const [isReady, setReady] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    })
      .then(() => setReady(true))
      .catch(err => console.error(err))
  }, [])

  return isReady ? (
    <Container style={style.container}>
      <LoanNav />
      <LoanHome loanList={loanList.loans} />
    </Container>
  ) : (
    <AppLoading />
  )
}
