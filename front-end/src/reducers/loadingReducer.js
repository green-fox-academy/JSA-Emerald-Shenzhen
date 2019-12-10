import { ACTION_TYPE } from '../lib/actions'

const initState = ''

function loadingReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPE.LOADING:
      return action.payload
    case ACTION_TYPE.LOADDONE:
      return 'DONE'
    default:
      return state
  }
}
export default loadingReducer
