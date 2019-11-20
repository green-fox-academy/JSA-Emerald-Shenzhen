import React, { useEffect, useState } from 'react'
import { AppLoading } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import { Container } from 'native-base'
import style from './AppStyle'
import Loan from './src/components/Loan/Loan'

const Roboto = require('native-base/Fonts/Roboto.ttf')
const RobotoMedium = require('native-base/Fonts/Roboto_medium.ttf')

export default function App() {
  const [isReady, setReady] = useState(false)
  useEffect(() => {
    Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium,
      ...Ionicons.font
    })
      .then(() => setReady(true))
      // eslint-disable-next-line no-console
      .catch(err => console.error(err))
  }, [])
  return isReady ? (
    <Container style={style.container}>
      <Loan />
    </Container>
  ) : (
    <AppLoading />
  )
}
