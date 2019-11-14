import React from 'react'
import { Text, ScrollView, View, Button } from 'react-native'
import { style } from './LoanHomeStyle'
import { LoadCard } from '../LoanCard/LoanCard'
import { LoanStaticButton } from '../LoanStaticButton/LoanStaticButton'

function LoanHome() {
  return (
    <View style={{ height: '100%', flex: 1, position: 'relative' }}>
      <ScrollView style={style.loanHomeScroll}>
        <Text style={style.header}>Current active contracts</Text>
        <LoadCard />
        <LoadCard />
        <LoadCard />
        <LoadCard />
      </ScrollView>
      <LoanStaticButton />
    </View>
  )
}

export { LoanHome }
