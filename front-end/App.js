/* eslint-disable global-require */
import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'

import MainPage from './src/components/MainPage/MainPage'
import LoanList from './src/components/LoanList/LoanList'
import PayNow from './src/components/PayNow/PayNow'
import NewLoan from './src/components/NewLoan/NewLoan'
import NewLoanDetail from './src/components/NewLoanDetails/NewLoanDetails'
import ProductSelection from './src/components/ProductSelection/ProductSelection'
import AccountSelection from './src/components/PayNow/AccountSelection'

import store from './src/lib/store'

const AppStack = createStackNavigator(
  {
    MainPage,
    LoanList,
    PayNow,
    NewLoan,
    NewLoanDetail,
    ProductSelection,
    AccountSelection
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
