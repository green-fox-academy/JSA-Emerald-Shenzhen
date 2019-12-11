import React, { useContext, useEffect } from 'react'
import { Content, Text, Container, Spinner } from 'native-base'
import { FlatList, View } from 'react-native'
import { NavigationContext } from 'react-navigation'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import style from './LoanListStyle'
import LoadCard from './LoanCard/LoanCard'
import { fetchLoanList } from '../../lib/actions'
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
      {loading === 'LOANS' ? (
        <Spinner color="blue" />
      ) : (
        <>
          <Content style={style.loanHomeScroll}>
            <Text style={style.header}>Current active contracts</Text>
            <FlatList
              data={loanList}
              renderItem={({ item }) => <LoadCard loan={item} />}
              keyExtractor={item => item.id.toString()}
            />
            <View style={style.holder} />
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

LoanList.navigationOptions = {
  title: 'Loans'
}
LoanList.propTypes = {
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return { loanList: state.loanList, loading: state.loading }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchLoanList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanList)
