import React, { useEffect, useState } from 'react'
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Chart = ({ loanList, id }) => {
  const [dataPair, setDataPair] = useState([])
  const loan = loanList.find(loanItem => loanItem.id === id)

  useEffect(() => {
    if (loan.history) {
      let isOneYear = true
      const year = parseInt(loan.history[0].date, 10)
      loan.history.forEach(histItem => {
        if (year !== parseInt(histItem.date, 10)) {
          isOneYear = false
        }
      })
      if (isOneYear) {
        const dayDataPair = loan.history.map(histItem => ({
          x: `${histItem.date.split('-')[1]}-${histItem.date.split('-')[2]}`,
          y: histItem.remaining
        }))
        setDataPair(dayDataPair)
      } else {
        const yearDataPair = loan.history.map(histItem => ({
          x: parseInt(histItem.date, 10),
          y: histItem.remaining
        }))
        setDataPair(yearDataPair)
      }
    }
  })

  return loan.history ? (
    <View>
      <VictoryChart height={250}>
        <VictoryLine
          style={{ data: { stroke: '#FB7348' }, parent: { border: '1px solid #ccc' } }}
          data={dataPair}
        />
        <VictoryScatter data={dataPair} size={5} style={{ data: { fill: '#FB7348' } }} />
      </VictoryChart>
    </View>
  ) : null
}

Chart.propTypes = {
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  return { loanList: state.loanList, id: state.detailLoanId }
}

export default connect(mapStateToProps, null)(Chart)
