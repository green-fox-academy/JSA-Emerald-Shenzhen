import React, { useState } from 'react'
import { Container, Content, View } from 'native-base'
import { TouchableWithoutFeedback, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import data from '../../../helpers/fakeProductsData'

import ProductCard from './ProductCard'

export default function ProductSelection(props) {
  const [selectId, setSelectId] = useState(-1)

  const { products } = props

  return (
    <Container>
      <Content>
        <ScrollView>
          {products.map(({ id, name, description }, sid) => {
            return (
              <TouchableWithoutFeedback
                key={id}
                onPress={() => {
                  setSelectId(sid)
                }}
              >
                <View>
                  <ProductCard
                    id={id}
                    name={name}
                    description={description}
                    isExtend={sid === selectId}
                  />
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
