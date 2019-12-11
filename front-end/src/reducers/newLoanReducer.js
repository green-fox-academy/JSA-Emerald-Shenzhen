import { ACTION_TYPE } from '../lib/actions'

const initState = []

function newLoanReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPE.POST_NEW_LOAN_SUCCESS:
      return action.postNewLoanData
    default:
      return state
  }
}
export default newLoanReducer
