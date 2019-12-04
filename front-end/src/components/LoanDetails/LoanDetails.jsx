import React from 'react'
import { Content, Container } from 'native-base'

import Detail from './Detail'
import Chart from './Chart'
import History from './History'

function LoanDetails() {
  return (
    <Container>
      <Content>
        <Detail />
        <Chart />
        <History />
      </Content>
    </Container>
  )
}

LoanDetails.navigationOptions = {
  title: 'Loan Details'
}

export default LoanDetails
