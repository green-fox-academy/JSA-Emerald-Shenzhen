import React, { useEffect } from 'react'
import { Content, Container, Spinner } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Detail from './Detail'
import Chart from './Chart'
import History from './History'

import { fetchDetail } from '../../lib/actions'

function LoanDetails({ loading, fetchData, id }) {
  useEffect(() => {
    fetchData(id)
  }, [])

  return (
    <Container>
      <Content>
        <Detail />
        {loading === 'DETAIL' ? (
          <Spinner color="blue" />
        ) : (
          <>
            <Chart />
            <History />
          </>
        )}
      </Content>
    </Container>
  )
}

const mapStateToProps = state => {
  return { loading: state.loading, id: state.detailLoanId }
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
  id: PropTypes.number.isRequired,
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanDetails)
