import loanReducer from './loanReducer'
import productReducer from './productReducer'

const initState = { loanList: [], productList: [], loanListLoading: false }

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initState, action) => {
  return {
    ...state,
    loanList: loanReducer(action),
    productList: productReducer(action)
  }
}

export default rootReducer
