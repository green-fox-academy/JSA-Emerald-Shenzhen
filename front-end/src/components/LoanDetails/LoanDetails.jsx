import React, { useState, useContext, useEffect } from 'react'
import { Content, Container, Spinner } from 'native-base'
import { connect } from 'react-redux'
import { NavigationContext } from 'react-navigation'
import PropTypes from 'prop-types'

import Detail from './Detail'
import Chart from './Chart'
import History from './History'

import { fetchDetail } from '../../lib/actions'

function LoanDetails({ fetchData, loanList, loading }) {
  const [loan, setLoan] = useState({})
  const navigation = useContext(NavigationContext)
  const { id } = navigation.getParam('shortLoanData')

  useEffect(() => {
    fetchData(id)
  }, [])

  useEffect(() => {
    setLoan(loanList.find(item => item.id === id))
  }, [loanList])

  return (
    <Container>
      <Content>
        <Detail />
        {loading ? (
          <Spinner color="blue" />
        ) : (
          <>
            <Chart loan={loan} />
            <History loan={loan} />
          </>
        )}
      </Content>
    </Container>
  )
}

const mapStateToProps = state => {
  return { loanList: state.loanList, loading: state.loading }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: id => dispatch(fetchDetail(id))
  }
}

LoanDetails.navigationOptions = {
  title: 'Loan Details'
}

LoanDetails.propTypes = {
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanDetails)
