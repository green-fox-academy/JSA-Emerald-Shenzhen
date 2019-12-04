import { combineReducers } from 'redux'
import loanReducer from './loanReducer'
import loadingReducer from './loadingReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
  loanList: loanReducer,
  loading: loadingReducer,
  productList: productReducer
})

export default rootReducer
