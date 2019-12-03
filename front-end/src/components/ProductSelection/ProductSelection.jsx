import React, { useState, useEffect } from 'react'
import { Container, Content, View } from 'native-base'
import { TouchableWithoutFeedback, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ACTION_TYPE from '../../lib/actionType'
import ProductCard from './ProductCard'

function ProductSelection({ productList, fetchProductList }) {
  const [selectId, setSelectId] = useState(-1)
  useEffect(() => {
    fetchProductList()
  }, [])
  return (
    <Container>
      <Content>
        <ScrollView>
          {productList.map((product, sid) => {
            return (
              <TouchableWithoutFeedback
                key={product.id}
                onPress={() => {
                  setSelectId(sid)
                }}
              >
                <View>
                  <ProductCard isExtend={sid === selectId} product={product} />
                </View>
              </TouchableWithoutFeedback>
            )
          })}
        </ScrollView>
      </Content>
    </Container>
  )
}

ProductSelection.propTypes = {
  fetchProductList: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.any).isRequired
}

ProductSelection.navigationOptions = {
  title: 'products'
}

const mapStateToProps = state => {
  return { productList: state.productList }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchProductList: () => dispatch({ type: ACTION_TYPE.INIT_PRODUCTLIST })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelection)
