import { ACTION_TYPE } from '../lib/actions'

const initState = []

const loanReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPE.INIT_LOANLIST_SUCCESS:
      return action.loanList
    case ACTION_TYPE.INIT_LOANLIST:
    default:
      return state
  }
}
export default loanReducer
