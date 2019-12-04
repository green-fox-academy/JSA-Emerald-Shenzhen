import { combineReducers } from 'redux'
import loanReducer from './loanReducer'
import loadingReducer from './loadingReducer'
// import productReducer from './productReducer' for next task

const rootReducer = combineReducers({ loans: loanReducer, loading: loadingReducer })

export default rootReducer
