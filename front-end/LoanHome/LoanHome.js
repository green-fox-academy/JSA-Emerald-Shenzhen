import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import { style } from './LoanHomeStyle'
import { LoadCard } from '../LoanCard/LoanCard'
import { LoanStaticButton } from '../LoanStaticButton/LoanStaticButton'

function LoanHome({ loanList }) {
  return (
    <View style={{ height: '100%', flex: 1, position: 'relative' }}>
      <ScrollView style={style.loanHomeScroll}>
        <Text style={style.header}>Current active contracts</Text>
        {loanList.map((loan, index) => {
          return <LoadCard key={index} loan={loan} />
        })}
      </ScrollView>
      <LoanStaticButton buttonAction={() => alert('nothing added')} />
    </View>
  )
}

export { LoanHome }
