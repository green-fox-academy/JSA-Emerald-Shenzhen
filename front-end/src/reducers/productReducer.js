import data from '../../helpers/mockData_FE'
import ACTION_TYPE from '../lib/actionType'

function productReducer(action) {
  if (action.type === ACTION_TYPE.INIT_PRODUCTLIST) {
    return data.products
  }
  return []
}

export default productReducer
