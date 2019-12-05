import React from 'react'
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-native'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const Chart = ({ loan }) => {
  const data = [
    { x: '2015', y: 3000 },
    { x: '2016', y: 4 },
    { x: '2017', y: 1 },
    { x: '2018', y: 2 },
    { x: '2019', y: 0 }
  ]
  return loan.history ? (
    <View>
      <VictoryChart height={250}>
        <VictoryLine
          style={{ data: { stroke: '#FB7348' }, parent: { border: '1px solid #ccc' } }}
          data={data}
        />
        <VictoryScatter data={data} size={5} style={{ data: { fill: '#FB7348' } }} />
      </VictoryChart>
    </View>
  ) : null
}

Chart.propTypes = {
  loan: PropTypes.shape({
    history: PropTypes.array
  }).isRequired
}

export default Chart
