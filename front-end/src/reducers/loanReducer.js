import data from '../../helpers/mockData_FE'
import ACTION_TYPE from '../lib/actionType'

function loanReducer(action) {
  if (action.type === ACTION_TYPE.INIT_LOANLIST) {
    return data.loans
  }
  return []
}

export default loanReducer
