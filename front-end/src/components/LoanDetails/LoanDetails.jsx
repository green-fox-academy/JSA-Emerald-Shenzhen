import React, { useContext } from 'react'
import { Content, Container } from 'native-base'
import { NavigationContext } from 'react-navigation'

import Detail from './Detail'
import Chart from './Chart'
import History from './History'

function LoanDetails() {
  const navigation = useContext(NavigationContext)
  console.log(navigation.getParam('data'))
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
