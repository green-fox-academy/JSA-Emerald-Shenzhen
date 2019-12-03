import React, { useContext, useEffect } from 'react'
import { Content, Text, Container } from 'native-base'
import { NavigationContext } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import style from './LoanListStyle'
import LoadCard from './LoanCard/LoanCard'
import { fetchLoanList } from '../../reducers/loanReducer'
import FloatingButton from '../FloatingButton/FloatingButton'

function LoanList({ loanList, loading, fetchData }) {
  const navigation = useContext(NavigationContext)
  const handlePress = () => {
    navigation.navigate('NewLoan')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
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
        </>
      )}
    </Container>
  )
}

const mapStateToProps = state => {
  return { loanList: state.loanList, loading: state.loading }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchLoanList())
  }
}

LoanList.navigationOptions = {
  title: 'Loans'
}
LoanList.propTypes = {
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanList)
