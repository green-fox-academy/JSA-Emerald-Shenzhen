import React from 'react'
import { Content, Container } from 'native-base'

import Detail from './Detail'
import Chart from './Chart'

function LoanDetails() {
  return (
    <Container>
      <Content>
        <Detail />
        <Chart />
      </Content>
    </Container>
  )
}

LoanDetails.navigationOptions = {
  title: 'Loan Details'
}

export default LoanDetails
