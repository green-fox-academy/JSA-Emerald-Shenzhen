import React from 'react'
import { Container, Content, Text } from 'native-base'

import style from './LoanListStyle'
import data from '../../../helpers/fakeLoanData'

import LoadCard from '../LoanCard/LoanCard'
import NewLoanButton from '../NewLoanButton/NewLoanButton'

function LoanList() {
  return (
    <Container>
      <Content style={style.loanHomeScroll}>
        <Text style={style.header}>Current active contracts</Text>
        {data.loans.map(loan => {
          return <LoadCard key={loan.id} loan={loan} />
        })}
      </Content>
      <NewLoanButton />
    </Container>
  )
}

LoanList.navigationOptions = {
  title: 'Loans'
}

export default LoanList
