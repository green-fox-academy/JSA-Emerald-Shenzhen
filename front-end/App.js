/* eslint-disable global-require */
import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'

import LoanList from './src/components/LoanList/LoanList'
import NewLoan from './src/components/NewLoan/NewLoan'
import MainPage from './src/components/MainPage/MainPage'
import NewLoanDetail from './src/components/NewLoanDetails/NewLoanDetails'
import ProductSelection from './src/components/ProductSelection/ProductSelection'

import store from './src/lib/store'

const AppStack = createStackNavigator(
  {
    MainPage,
    LoanList,
    NewLoan,
    NewLoanDetail,
    ProductSelection
  },
  {
    initialRouteName: 'NewLoan',
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
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
      })
      setIsReady(true)
    }
    loadExpoFonts()
  })
  return isReady ? (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  ) : (
    <Provider store={store}>
      <AppLoading />
    </Provider>
  )
}
