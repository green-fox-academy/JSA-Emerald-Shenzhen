import React, { useContext } from 'react'
import { Text, Grid, Col, Icon } from 'native-base'
import { TouchableOpacity, View } from 'react-native'
import { NavigationContext } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import style from './DetailStyle'

const Detail = ({ loanList, id }) => {
  const navigation = useContext(NavigationContext)
  const { type, remaining } = loanList.find(loan => loan.id === id)

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

const mapStateToProps = state => {
  return { loanList: state.loanList, id: state.detailLoanId }
}

Detail.propTypes = {
  loanList: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.number.isRequired
}

export default connect(mapStateToProps, null)(Detail)
