import React, { useEffect, useState } from 'react'
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Chart = ({ loanHistory }) => {
  let mounted = true
  const [dataPair, setDataPair] = useState([])

  useEffect(() => {
    if (mounted && loanHistory) {
      let isOneYear = true
      const year = parseInt(loanHistory[0].date, 10)
      loanHistory.forEach(histItem => {
        if (year !== parseInt(histItem.date, 10)) {
          isOneYear = false
        }
      })
      if (isOneYear) {
        const dayDataPair = loanHistory.map(histItem => ({
          x: `${histItem.date.split('-')[1]}-${histItem.date.split('-')[2]}`,
          y: histItem.remaining
        }))
        setDataPair(dayDataPair)
      } else {
        const yearDataPair = []
        loanHistory.forEach(histItem => {
          if (yearDataPair.length === 0) {
            yearDataPair.push({
              x: histItem.date,
              y: histItem.remaining
            })
          } else if (
            parseInt(histItem.date, 10) !== parseInt(yearDataPair[yearDataPair.length - 1].x, 10)
          ) {
            yearDataPair.push({
              x: histItem.date,
              y: histItem.remaining
            })
          }
        })
        setDataPair(yearDataPair)
      }
    }
    return () => {
      mounted = false
    }
  }, [loanHistory])

  return dataPair.length > 0 ? (
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
  loanHistory: PropTypes.arrayOf(PropTypes.any)
}

Chart.defaultProps = {
  loanHistory: undefined
}

const mapStateToProps = state => {
  return {
    loanHistory: state.loanList.find(loanItem => loanItem.id === state.detailLoanId).history
  }
}

export default connect(mapStateToProps, null)(Chart)
