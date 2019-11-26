import React, { useContext } from 'react'
import { Content, Text, Container } from 'native-base'
import { NavigationContext } from 'react-navigation'
import style from './LoanListStyle'
import data from '../../../helpers/mockData_FE'
import LoadCard from '../LoanCard/LoanCard'
import FloatingButton from '../FloatingButton/FloatingButton'

function LoanList() {
  const navigation = useContext(NavigationContext)
  const handlePress = () => {
    navigation.navigate('NewLoan')
  }
  return (
    <Container>
      <Content style={style.loanHomeScroll}>
        <Text style={style.header}>Current active contracts</Text>
        {data.loans.map(loan => {
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

LoanList.navigationOptions = {
  title: 'Loans'
}

export default LoanList
