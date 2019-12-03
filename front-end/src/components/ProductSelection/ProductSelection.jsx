import React, { useState } from 'react'
import { Container, Content, View } from 'native-base'
import { TouchableWithoutFeedback, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import data from '../../../helpers/fakeProductsData'

import ProductCard from './ProductCard'

export default function ProductSelection({ products }) {
  const [selectId, setSelectId] = useState(-1)

  return (
    <Container>
      <Content>
        <ScrollView>
          {products.map((product, sid) => {
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
  products: PropTypes.arrayOf(PropTypes.any)
}

ProductSelection.defaultProps = {
  products: data.products
}

ProductSelection.navigationOptions = {
  title: 'products'
}
