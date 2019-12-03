import loanReducer from './loanReducer'
import productReducer from './productReducer'

const initState = { loanList: [], productList: [], loading: true }

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initState, action) => {
  return {
    ...state,
    ...loanReducer(action),
    ...productReducer(action)
  }
}

export default rootReducer
