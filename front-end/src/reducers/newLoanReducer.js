import { ACTION_TYPE } from '../lib/actions'

const initState = []

function newLoanReducer(state = initState, action) {
  switch (action.type) {
    case ACTION_TYPE.POST_NEW_LOAN_SUCCESS:
      console.log(`state = ${state}`)
      console.log(`action = ${Object.entries(action)}`)
      console.log(`action.type = ${action.type}`)
      console.log(`action.POST_NEW_LOAN_SUCCESS = ${action.POST_NEW_LOAN_SUCCESS}`)
      console.log(`action.postNewLoanData = ${Object.entries(action.postNewLoanData)}`)
      return action.postNewLoanData
    default:
      return state
  }
}
export default newLoanReducer
