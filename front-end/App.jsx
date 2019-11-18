import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import { AppLoading } from 'expo'
import Roboto from 'native-base/Fonts/Roboto.ttf'
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf'
import NewLoan from './NewLoan/NewLoan'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

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

  if (!isReady) {
    return <AppLoading />
  }

  return (
    <Container style={styles.container}>
      <NewLoan />
    </Container>
  )
}
