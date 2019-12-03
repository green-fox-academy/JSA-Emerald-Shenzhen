// import data from '../../helpers/mockData_FE'
import ACTION_TYPE from '../lib/actionType'
import URL from '../lib/URL'

function loanReducer(action) {
  if (action.type === ACTION_TYPE.INIT_LOANLIST) {
    return { loading: true }
  }
  if (action.type === ACTION_TYPE.INIT_LOANLIST_SUCCESS) {
    return { loanList: action.loanList, loading: false }
  }
  return {}
}

function fetchLoanList() {
  return async dispatch => {
    dispatch({ type: ACTION_TYPE.INIT_LOANLIST })
    // eslint-disable-next-line no-undef
    const data = await fetch(URL.getLoans, {
      headers: { Authentication: 'Bearer token', Accept: 'application/json' }
    }).then(res => res.json())
    dispatch({ type: ACTION_TYPE.INIT_LOANLIST_SUCCESS, loanList: data.loanList })
    // setTimeout(() => {
    //   dispatch({ type: ACTION_TYPE.INIT_LOANLIST_SUCCESS })
    // }, 1000)
  }
}

export default loanReducer
export { fetchLoanList }
