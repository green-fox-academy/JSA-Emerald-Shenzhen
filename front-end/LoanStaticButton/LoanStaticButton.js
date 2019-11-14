import React from 'react'
import { Text, TouchableOpacity, TouchableNativeFeedback, View } from 'react-native'
import { style } from './LoanStaticButtonStyle'
import { Platform } from '@unimodules/core'

function LoanStaticButton() {
  return Platform.OS === 'android' ? (
    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={style.loanButtonNativeFeedback}>
        <Text style={style.text}>+ New Loan</Text>
      </View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity activeOpacity={0.5} style={style.loanButtonOpacity}>
      <Text style={style.text}>+ New Loan</Text>
    </TouchableOpacity>
  )
}

export { LoanStaticButton }
