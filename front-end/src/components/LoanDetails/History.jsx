import React from 'react'
import { View, ScrollView, FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import HistoryItem from './HistoryItem'
import style from './HistoryStyle'

const History = ({ loanHistory }) => {
  return (
    <View style={style.body}>
      {loanHistory ? (
        <>
          <Text style={style.title}>History</Text>
          <ScrollView style={{ height: 350 }}>
            <FlatList
              data={loanHistory}
              renderItem={({ item }) => <HistoryItem historyItem={item} />}
              keyExtractor={(_, index) => index.toString()}
            />
          </ScrollView>
        </>
      ) : (
        <View style={style.warning}>
          <Text style={style.warningText}>No available records now</Text>
        </View>
      )}
    </View>
  )
}

History.propTypes = {
  loanHistory: PropTypes.arrayOf(PropTypes.any)
}

History.defaultProps = {
  loanHistory: undefined
}

const mapStateToProps = state => {
  return {
    loanHistory: state.loanList.find(loanItem => loanItem.id === state.detailLoanId).history
  }
}

export default connect(mapStateToProps, null)(History)
