import React from 'react'
import { Text } from 'react-native'
import { style } from './LoanStaticButtonStyle'
import { Fab } from 'native-base'

function LoanStaticButton({ buttonAction }) {
  return (
    <Fab
      onPress={buttonAction}
      active={true}
      direction="up"
      style={style.loanButton}
      position="bottomRight"
    >
      <Text style={style.text}>+ New Loan</Text>
    </Fab>
  )
}

export { LoanStaticButton }
