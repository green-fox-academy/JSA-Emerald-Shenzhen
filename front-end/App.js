/* eslint-disable global-require */
import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'
import { Platform, Easing, Animated } from 'react-native'

import MainPage from './src/components/MainPage/MainPage'
import LoanList from './src/components/LoanList/LoanList'
import PayNow from './src/components/PayNow/PayNow'
import NewLoan from './src/components/NewLoan/NewLoan'
import NewLoanDetail from './src/components/NewLoanDetails/NewLoanDetails'
import ProductSelection from './src/components/ProductSelection/ProductSelection'
import LoanDetails from './src/components/LoanDetails/LoanDetails'
import ProcessingLoan from './src/components/NewLoanDetails/ProcessingLoan'

import store from './src/lib/store'

const CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1]
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  })

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  })

  return {
    opacity,
    transform: [{ scaleY }]
  }
}

const SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1]
  const translateX = position.interpolate({
    inputRange,
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
}

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 600,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const width = layout.initWidth
      const { index, route } = scene
      const params = route.params || {}
      const transition = params.transition || 'default'
      return {
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width)
      }[transition]
    }
  }
}

const AppStack = createStackNavigator(
  {
    MainPage,
    LoanList,
    PayNow,
    NewLoan,
    NewLoanDetail,
    ProductSelection,
    LoanDetails,
    ProcessingLoan
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
      },
      headerBackTitle: 'Back'
    },
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    transitionConfig: TransitionConfiguration
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
