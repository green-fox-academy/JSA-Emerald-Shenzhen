import React, { useState, useEffect } from 'react'
import { Container, Content, View } from 'native-base'
import { TouchableWithoutFeedback, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ACTION_TYPE from '../../lib/actionType'
import AccountCard from './AccountCard'

function AccountSelection({ productList, fetchProductList }) {
  const [selectId, setSelectId] = useState(-1)
  useEffect(() => {
    fetchProductList()
  }, [])
  return (
    <Container>
      <Content>
        <ScrollView>
          {productList.map((account, sid) => {
            return (
              <TouchableWithoutFeedback
                key={account.id}
                onPress={() => {
                  setSelectId(sid)
                }}
              >
                <View>
                  <AccountCard isExtend={sid === selectId} account={account} />
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </ScrollView>
      </Content>
    </Container>
  )
}

AccountSelection.propTypes = {
  fetchProductList: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.any).isRequired
}

AccountSelection.navigationOptions = {
  title: 'accounts'
}

const mapStateToProps = state => {
  return { productList: state.productList }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProductList: () => dispatch({ type: ACTION_TYPE.INIT_PRODUCTLIST })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSelection)
