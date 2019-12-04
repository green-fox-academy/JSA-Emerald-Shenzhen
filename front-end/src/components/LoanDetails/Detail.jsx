import React, { useContext } from 'react'
import { Text, Grid, Col, Icon } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import { NavigationContext } from 'react-navigation'

import style from './DetailStyle'

const Detail = () => {
  const navigation = useContext(NavigationContext)
  const { id, type, remaining } = navigation.getParam('shortLoanData')

  const handlePress = () => {
    navigation.navigate('PayNow')
  }

  return (
    <Grid style={style.body}>
      <Col style={style.col}>
        <Text style={style.id}>{`ID - ${id}`}</Text>
        <Text style={style.name}>{type.name}</Text>
        <Text>{`Current Interest rate: ${type.interest}%`}</Text>
      </Col>
      <Col style={style.col}>
        <View>
          <Text style={style.remaining}>{`$ ${remaining}`}</Text>
          <Text style={style.remainingText}>remaining</Text>
        </View>
        <TouchableOpacity style={style.button} onPress={handlePress}>
          <View style={style.circle}>
            <Icon type="FontAwesome" name="dollar" style={style.dollar} />
          </View>
          <Text>PAY NOW</Text>
        </TouchableOpacity>
      </Col>
    </Grid>
  )
}

export default Detail
