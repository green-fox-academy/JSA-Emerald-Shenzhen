import { combineReducers } from 'redux'

import loanReducer from './loanReducer'
import loadingReducer from './loadingReducer'
import productReducer from './productReducer'
import detailLoanIdProducer from './detailLoanId'

const rootReducer = combineReducers({
  loanList: loanReducer,
  loading: loadingReducer,
  productList: productReducer,
  detailLoanId: detailLoanIdProducer
})

export default rootReducer
