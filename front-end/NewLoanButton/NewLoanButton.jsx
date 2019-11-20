import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import { Fab } from 'native-base'
import style from './NewLoanButtonStyle'

function NewLoanButton({ buttonAction }) {
  return (
    <Fab
      onPress={buttonAction}
      active
      direction="up"
      style={style.loanButton}
      position="bottomRight"
    >
      <Text style={style.text}>+ New Loan</Text>
    </Fab>
  )
}

NewLoanButton.propTypes = {
  buttonAction: PropTypes.func.isRequired
}

export default NewLoanButton
