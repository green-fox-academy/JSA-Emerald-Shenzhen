import React from 'react'
import { Text, Grid, Col, Icon } from 'native-base'
import { TouchableOpacity, View } from 'react-native'

import style from './DetailStyle'

const Detail = () => {
  return (
    <Grid style={style.body}>
      <Col>
        <Text style={style.id}>ID 123456</Text>
        <Text style={style.name}>Student Loan</Text>
        <Text>Current Interest rate: 3%</Text>
      </Col>
      <Col>
        <Text style={style.remaining}>$ 3400</Text>
        <Text style={style.remainingText}>remaining</Text>
        <TouchableOpacity style={style.button}>
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
