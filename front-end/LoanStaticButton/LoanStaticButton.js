import React from 'react'
import { Text, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native'
import { style } from './LoanStaticButtonStyle'
import { Platform } from '@unimodules/core'

function LoanStaticButton({ buttonAction }) {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback onPress={buttonAction} background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={style.loanButton}>
        <Text style={style.text}>+ New Loan</Text>
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={buttonAction} activeOpacity={0.5} style={style.loanButton}>
      <Text style={style.text}>+ New Loan</Text>
    </TouchableOpacity>
  )
}

export { LoanStaticButton }
