import React, { useContext, useEffect } from 'react'
import { Content, Text, Container } from 'native-base'
import { NavigationContext } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import style from './LoanListStyle'
import LoadCard from './LoanCard/LoanCard'
import ACTION_TYPE from '../../lib/actionType'
import FloatingButton from '../FloatingButton/FloatingButton'

function LoanList({ loanList, fetchLoanList }) {
  const navigation = useContext(NavigationContext)
  const handlePress = () => {
    navigation.navigate('NewLoan')
  }

  useEffect(() => {
    fetchLoanList()
  }, [])

  return (
    <Container>
      <Content style={style.loanHomeScroll}>
        <Text style={style.header}>Current active contracts</Text>
        {loanList.map(loan => {
          return <LoadCard key={loan.id} loan={loan} />
        })}
      </Content>
      <FloatingButton
        icon={{ type: 'Entypo', name: 'plus' }}
        text="New Loan"
        handlePress={handlePress}
        buttonStyle={{ width: 160 }}
      />
    </Container>
  )
}

const mapStateToProps = state => {
  return { ...state }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchLoanList: () => dispatch({ type: ACTION_TYPE.INIT_LOANLIST })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanList)

LoanList.navigationOptions = {
  title: 'Loans'
}
LoanList.propTypes = {
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchLoanList: PropTypes.func.isRequired
}
