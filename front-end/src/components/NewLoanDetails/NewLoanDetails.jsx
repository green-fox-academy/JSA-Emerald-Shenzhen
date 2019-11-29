import React, { useState } from 'react'
import { Text, View, Content, Icon, Container } from 'native-base'
import style from './NewLoanDetailsStyle'
import LoanPickers from './LoanPickers'
import data from '../../../helpers/mockData_FE'
import FloatingButton from '../FloatingButton/FloatingButton'

export default function NewLoanDetails() {
  const [receivingAccount, setreceivingAccount] = useState(data.receivingAccount[0])
  const [defaultPayment, setdefaultPayment] = useState(data.defaultPayment[0])
  const handlePress = () => {
    // eslint-disable-next-line no-undef
    alert(`${receivingAccount.label}\n${defaultPayment.label}`)
  }
  return (
    <Container>
      <Content style={style.content}>
        <View style={style.upDetailsView}>
          <Text style={style.amountFont}>$ 5000</Text>
          <Text style={style.transactionFont}>will be added to your</Text>
          <Text style={style.selectionTitle}>Receiving amount</Text>
          <LoanPickers
            selected={receivingAccount}
            setSelected={setreceivingAccount}
            itemList={data.receivingAccount}
          />
          <Text style={style.transactionFont}>and you will pay</Text>
          <Text style={style.amountFont}>$ 86.84</Text>
          <Text style={style.selectionTitle}>Default Payment</Text>
          <LoanPickers
            selected={defaultPayment}
            setSelected={setdefaultPayment}
            itemList={data.defaultPayment}
          />
        </View>
        <View style={style.downTipView}>
          <Icon name="exclamation-circle" type="FontAwesome" />
          <Text style={style.exclamationText}>
            {`This amount will be automatically removed from your account every ${defaultPayment.value}.`}
          </Text>
        </View>
      </Content>
      <FloatingButton
        buttonStyle={{ width: 130, backgroundColor: '#72bb53' }}
        icon={{ type: 'MaterialIcons', name: 'done' }}
        text="Finish"
        handlePress={handlePress}
      />
    </Container>
  )
}
NewLoanDetails.navigationOptions = {
  title: 'New Loan Details'
}
