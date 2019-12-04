import { ACTION_TYPE } from '../lib/actions'

const initState = true

function loadingReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPE.LOADDONE:
      return false
    case ACTION_TYPE.LOADING:
      return true
    default:
      return state
  }
}
export default loadingReducer
