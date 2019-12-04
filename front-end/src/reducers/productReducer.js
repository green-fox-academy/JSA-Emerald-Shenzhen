import data from '../../helpers/mockData_FE'
import { ACTION_TYPE } from '../lib/actions'

const initState = { productList: [] }
function productReducer(state = initState, action) {
  if (action.type === ACTION_TYPE.INIT_PRODUCTLIST) {
    return data.products
  }
  return state
}

export default productReducer
