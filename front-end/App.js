import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Container } from 'native-base'
import { AppLoading } from 'expo'
import Roboto from 'native-base/Fonts/Roboto.ttf'
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf'

import Loan from './src/components/Loan/Loan'
import NewLoan from './src/components/NewLoan/NewLoan'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function loadExpoFonts() {
      await Font.loadAsync({
        Roboto,
        RobotoMedium,
        ...Ionicons.font
      })
      setIsReady(true)
    }
    loadExpoFonts()
  })

  return isReady ? (
    <Container>
      <Loan />
      <NewLoan />
    </Container>
  ) : (
    <AppLoading />
  )
}
