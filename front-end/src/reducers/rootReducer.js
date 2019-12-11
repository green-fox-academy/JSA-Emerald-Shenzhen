import { combineReducers } from 'redux'

import loanReducer from './loanReducer'
import loadingReducer from './loadingReducer'
import productReducer from './productReducer'
import detailLoanIdProducer from './detailLoanId'
import newLoanReducer from './newLoanReducer'

const rootReducer = combineReducers({
  loanList: loanReducer,
  loading: loadingReducer,
  productList: productReducer,
  detailLoanId: detailLoanIdProducer,
  newLoan: newLoanReducer
})

export default rootReducer
