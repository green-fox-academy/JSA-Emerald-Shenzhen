import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import Roboto from 'native-base/Fonts/Roboto.ttf'
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoanList from './src/components/LoanList/LoanList'
import NewLoan from './src/components/NewLoan/NewLoan'
import MainPage from './src/components/MainPage/MainPage'

const AppStack = createStackNavigator(
  {
    MainPage,
    LoanList,
    NewLoan
  },
  {
    initialRouteName: 'MainPage',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2296F3'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const AppContainer = createAppContainer(AppStack)

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

  return isReady ? <AppContainer /> : <AppLoading />
}
