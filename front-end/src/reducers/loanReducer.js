import { ACTION_TYPE } from '../lib/actions'

const initState = []

function loanReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPE.INIT_LOANLIST_SUCCESS:
      return action.loanList
    case ACTION_TYPE.INIT_DETAIL_SUCCESS: {
      const index = state.findIndex(item => action.payload.id === item.id)
      const firstPart = state.slice(0, index)
      const result = firstPart.concat([action.payload], state.slice(index + 1))
      return result
    }
    case ACTION_TYPE.INIT_LOANLIST:
    case ACTION_TYPE.INIT_DETAIL:
    default:
      return state
  }
}
export default loanReducer
