import React, { useState, useEffect } from 'react'
import { Container, Content, View, Spinner } from 'native-base'
import { TouchableWithoutFeedback, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProductList } from '../../lib/actions'
import ProductCard from './ProductCard'

function ProductSelection({ productList, loading, fetchData }) {
  const [selectId, setSelectId] = useState(-1)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      {loading ? (
        <Spinner color="blue" />
      ) : (
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
        )}
    </Container>
  )
}

ProductSelection.propTypes = {
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  productList: PropTypes.arrayOf(PropTypes.any).isRequired
}

ProductSelection.navigationOptions = {
  title: 'products'
}

const mapStateToProps = state => {
  return { productList: state.productList, loading: state.loading }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchProductList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelection)
