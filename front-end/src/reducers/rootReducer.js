import ACTION_TYPE from '../lib/actionType'
import data from '../../helpers/mockData_FE'

const initState = { loanList: [], loanListLoading: false }

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initState, action) => {
  if (action.type === ACTION_TYPE.INIT_LOANLIST) {
    return { ...state, loanList: data.loans }
  }

  return state
}

export default rootReducer
