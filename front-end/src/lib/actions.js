import URL from './URL'

const ACTION_TYPE = {
  LOADING: 'LOADING',
  LOADDONE: 'LOADDONE',
  INIT_LOANLIST: 'INIT_LOANLIST',
  INIT_LOANLIST_SUCCESS: 'INIT_LOANLIST_SUCCESS',
  INIT_PRODUCTLIST: 'INIT_PRODUCTLIST',
  INIT_PRODUCTLIST_SUCCESS: 'INIT_PRODUCTLIST_SUCCESS'
}

function fetchLoanList() {
  return async dispatch => {
    dispatch({ type: ACTION_TYPE.LOADING })
    dispatch({ type: ACTION_TYPE.INIT_LOANLIST })

    try {
      const data = await fetch(URL.getLoans, {
        headers: { Authentication: 'Bearer token', Accept: 'application/json' }
      }).then(res => res.json())

      dispatch({ type: ACTION_TYPE.INIT_LOANLIST_SUCCESS, loanList: data })
      dispatch({ type: ACTION_TYPE.LOADDONE })
    } catch (error) {
      // haven`t handled
      dispatch({ type: ACTION_TYPE.ERROR, error })
    }
  }
}

export { fetchLoanList, ACTION_TYPE }
