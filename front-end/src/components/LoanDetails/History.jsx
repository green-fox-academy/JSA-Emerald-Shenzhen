import React from 'react'
import { View, FlatList, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import HistoryItem from './HistoryItem'
import style from './HistoryStyle'

const History = ({ loanList, id }) => {
  const loan = loanList.find(loanItem => loanItem.id === id)

  return (
    <View style={style.body}>
      {loan.history ? (
        <>
          <Text style={style.title}>History</Text>
          <FlatList
            data={loan.history}
            renderItem={({ item }) => <HistoryItem historyItem={item} />}
            keyExtractor={(_, index) => index.toString()}
          />
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
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  return { loanList: state.loanList, id: state.detailLoanId }
}

export default connect(mapStateToProps, null)(History)
