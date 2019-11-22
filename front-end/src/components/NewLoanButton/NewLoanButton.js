import React, { useContext } from 'react'
import { Text } from 'react-native'
import { Fab } from 'native-base'
import { NavigationContext } from 'react-navigation'
import style from './NewLoanButtonStyle'

function NewLoanButton() {
  const navigation = useContext(NavigationContext)
  const handlePress = () => {
    navigation.navigate('NewLoan')
  }

  return (
    <Fab
      onPress={handlePress}
      active
      direction="up"
      style={style.loanButton}
      position="bottomRight"
    >
      <Text style={style.text}>+ New Loan</Text>
    </Fab>
  )
}

export default NewLoanButton
