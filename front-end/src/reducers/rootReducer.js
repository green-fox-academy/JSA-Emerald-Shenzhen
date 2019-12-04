import { combineReducers } from 'redux'
import loanReducer from './loanReducer'
import loadingReducer from './loadingReducer'
// import productReducer from './productReducer' for next task

const rootReducer = combineReducers({ loanList: loanReducer, loading: loadingReducer })

export default rootReducer
