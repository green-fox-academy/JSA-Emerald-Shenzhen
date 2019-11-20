import React from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, View } from 'react-native'
import style from './LoanListStyle'
import LoadCard from '../LoanCard/LoanCard'
import NewLoanButton from '../NewLoanButton/NewLoanButton'

function LoanList({ loanList }) {
  return (
    <View style={{ height: '100%', flex: 1, position: 'relative' }}>
      <ScrollView style={style.loanHomeScroll}>
        <Text style={style.header}>Current active contracts</Text>
        {loanList.map(loan => {
          return <LoadCard key={loan.id} loan={loan} />
        })}
      </ScrollView>
      {/* eslint-disable-next-line no-console */}
      <NewLoanButton buttonAction={() => console.log('nothing added')} />
    </View>
  )
}

LoanList.propTypes = {
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired
}
export default LoanList
