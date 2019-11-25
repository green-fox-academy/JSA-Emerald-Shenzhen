import React, { useState } from 'react'
import { Text, View, Content, Form, Picker, Icon } from 'native-base'
import style from './NewLoanDetailsStyle'

export default function NewLoanDetails() {
  const [seleted, setSelected] = useState('Main Deposit')

  return (
    <>
      <Content style={style.content}>
        <View style={style.upDetailsView}>
          <Text style={style.amountFont}>$ 5000</Text>
          <Text style={style.transactionFont}>will be added to your</Text>
          <Text style={style.selectionTitle}>Receiving amount</Text>

          <Form style={style.picker}>
            <Picker
              textStyle={style.pickerItem}
              itemStyle={style.pickerItem}
              mode="dropdown"
              selectedValue={seleted}
              onValueChange={value => setSelected(value)}
              iosIcon={<Icon name="arrow-down" />}
            >
              <Picker.Item label="Main Deposit" value="Main Deposit" />
              <Picker.Item label="Main Deposit2" value="Main Deposit2" />
              <Picker.Item label="Main Deposit3" value="Main Deposit3" />
              <Picker.Item label="Main Deposit4" value="Main Deposit4" />
            </Picker>
          </Form>
          <Text style={style.transactionFont}>and you will pay</Text>
        </View>
      </Content>
    </>
  )
}
