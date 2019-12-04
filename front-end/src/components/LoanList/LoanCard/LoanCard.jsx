import React, { useContext } from 'react'
import { NavigationContext } from 'react-navigation'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, Button, Left, Body, Right, Icon } from 'native-base'

import style from './LoanCardStyle'

function LoadCard({ loan }) {
  const navigation = useContext(NavigationContext)

  const handlePress = () => {
    navigation.navigate('LoanDetails', { transition: 'collapseExpand' })
  }

  return (
    <Card>
      <CardItem style={style.loanCardUpPart}>
        <Body>
          <Text style={style.loanId}>
            ID
            {loan.type.id}
          </Text>
          <Text style={style.loanType}>{loan.type.name}</Text>
          <Text style={style.interest}>{`Current Interest rate: ${loan.type.interest}%`}</Text>
          <Text style={style.loanPrice}>{`$ ${loan.remaining}`}</Text>
          <Text style={style.loanRemaining}>remaining</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent onPress={handlePress}>
            <Text>DETAILS</Text>
          </Button>
        </Left>
        <Right>
          <TouchableOpacity style={style.button}>
            <View style={style.circle}>
              <Icon type="FontAwesome" name="dollar" style={style.dollar} />
            </View>
            <Text>PAY NOW</Text>
          </TouchableOpacity>
        </Right>
      </CardItem>
    </Card>
  )
}

LoadCard.propTypes = {
  loan: PropTypes.objectOf(PropTypes.any).isRequired
}
export default LoadCard
