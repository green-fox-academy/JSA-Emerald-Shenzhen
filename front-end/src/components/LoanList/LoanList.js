import React from 'react'
import { Container, Content, Text } from 'native-base'
import PropTypes from 'prop-types'

import style from './LoanListStyle'
import data from '../../../helpers/fakeLoanData'

import LoadCard from '../LoanCard/LoanCard'
import NewLoanButton from '../NewLoanButton/NewLoanButton'

function LoanList({ navigation }) {
  return (
    <Container style={{ height: '100%', flex: 1, position: 'relative' }}>
      <Content style={style.loanHomeScroll}>
        <Text style={style.header}>Current active contracts</Text>
        {data.loans.map(loan => {
          return <LoadCard key={loan.id} loan={loan} />
        })}
      </Content>
      <NewLoanButton
        buttonAction={() => {
          navigation.navigate('NewLoan')
        }}
      />
    </Container>
  )
}

LoanList.navigationOptions = {
  title: 'Loans'
}

LoanList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

export default LoanList
