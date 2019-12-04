import { ACTION_TYPE } from '../lib/actions'

const initState = []

function productReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPE.INIT_PRODUCTLIST_SUCCESS:
      return action.productList
    case ACTION_TYPE.INIT_PRODUCTLIST:
    default:
      return state
  }
}
export default productReducer
