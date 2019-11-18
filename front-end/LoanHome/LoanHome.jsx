import React from 'react'
import PropTypes from 'prop-types'
import { Text, ScrollView, View } from 'react-native'
import style from './LoanHomeStyle'
import LoadCard from '../LoanCard/LoanCard'
import LoanStaticButton from '../LoanStaticButton/LoanStaticButton'

function LoanHome({ loanList }) {
  return (
    <View style={{ height: '100%', flex: 1, position: 'relative' }}>
      <ScrollView style={style.loanHomeScroll}>
        <Text style={style.header}>Current active contracts</Text>
        {loanList.map(loan => {
          return <LoadCard key={loan.id} loan={loan} />
        })}
      </ScrollView>
      {/* eslint-disable-next-line no-console */}
      <LoanStaticButton buttonAction={() => console.log('nothing added')} />
    </View>
  )
}

LoanHome.propTypes = {
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired
}
export default LoanHome
