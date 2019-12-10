import React, { useContext } from 'react'
import { NavigationContext } from 'react-navigation'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import { Card, CardItem, Text, Left, Body, Right, Icon } from 'native-base'
import { connect } from 'react-redux'

import style from './LoanCardStyle'
import { setDetailId } from '../../../lib/actions'

function LoadCard({ loan, setId }) {
  const { id, type, remaining } = loan
  const navigation = useContext(NavigationContext)

  const goLoanDetails = () => {
    setId(id)
    navigation.navigate('LoanDetails', {
      transition: 'collapseExpand'
    })
  }

  const goPayNow = () => {
    navigation.navigate('PayNow', {
      transition: 'collapseExpand'
    })
  }

  return (
    <Card>
      <CardItem style={style.up}>
        <Body>
          <Text style={style.id}>{`ID - ${id}`}</Text>
          <Text style={style.type}>{type.name}</Text>
          <Text style={style.interest}>{`Current Interest rate: ${type.interest}%`}</Text>
          <Text style={style.price}>{`$ ${remaining}`}</Text>
          <Text style={style.remaining}>remaining</Text>
        </Body>
      </CardItem>
      <CardItem>
        <Left>
          <TouchableOpacity onPress={goLoanDetails}>
            <Text>DETAILS</Text>
          </TouchableOpacity>
        </Left>
        <Right>
          <TouchableOpacity style={style.button} onPress={goPayNow}>
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

const mapDispatchToProps = dispatch => {
  return {
    setId: id => dispatch(setDetailId(id))
  }
}

LoadCard.propTypes = {
  loan: PropTypes.objectOf(PropTypes.any).isRequired,
  setId: PropTypes.func.isRequired
}
export default connect(null, mapDispatchToProps)(LoadCard)
