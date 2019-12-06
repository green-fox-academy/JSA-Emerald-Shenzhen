import { ACTION_TYPE } from '../lib/actions'

const initState = -1

function detailLoanId(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPE.SET_DETAIL_ID:
    case ACTION_TYPE.INIT_DETAIL_SUCCESS:
      return action.id
    default:
      return state
  }
}
export default detailLoanId
