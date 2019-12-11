import URL from './URL'

const ACTION_TYPE = {
  LOADING: 'LOADING',
  LOADDONE: 'LOADDONE',
  INIT_LOANLIST: 'INIT_LOANLIST',
  INIT_LOANLIST_SUCCESS: 'INIT_LOANLIST_SUCCESS',
  INIT_PRODUCTLIST: 'INIT_PRODUCTLIST',
  INIT_PRODUCTLIST_SUCCESS: 'INIT_PRODUCTLIST_SUCCESS',
  INIT_DETAIL: 'INIT_DETAIL',
  INIT_DETAIL_SUCCESS: 'INIT_DETAIL_SUCCESS',
  SET_DETAIL_ID: 'SET_DETAIL_ID',
  POST_NEW_LOAN_SUCCESS: 'POST_NEW_LOAN_SUCCESS'
}

async function fetchData(url) {
  return fetch(url, {
    headers: { Authentication: 'Bearer token', Accept: 'application/json' }
  }).then(res => res.json())
}

function fetchLoanList() {
  return async dispatch => {
    dispatch({ type: ACTION_TYPE.LOADING })
    dispatch({ type: ACTION_TYPE.INIT_LOANLIST })

    try {
      const data = await fetchData(URL.getLoans)
      dispatch({ type: ACTION_TYPE.INIT_LOANLIST_SUCCESS, loanList: data })
      dispatch({ type: ACTION_TYPE.LOADDONE })
    } catch (error) {
      // dispatch({ type: ACTION_TYPE.ERROR, error })
      console.log(error)
    }
  }
}

function fetchProductList() {
  return async dispatch => {
    dispatch({ type: ACTION_TYPE.LOADING })
    dispatch({ type: ACTION_TYPE.INIT_PRODUCTLIST })

    try {
      const data = await fetchData(URL.getProducts)
      dispatch({ type: ACTION_TYPE.INIT_PRODUCTLIST_SUCCESS, productList: data })
      dispatch({ type: ACTION_TYPE.LOADDONE })
    } catch (error) {
      // dispatch({ type: ACTION_TYPE.ERROR, error })
      console.log(error)
    }
  }
}

const fetchDetail = id => {
  return dispatch => {
    dispatch({ type: ACTION_TYPE.LOADING })
    dispatch({ type: ACTION_TYPE.INIT_DETAIL })
    return fetchData(URL.getDetail(id))
      .then(data => dispatch({ type: ACTION_TYPE.INIT_DETAIL_SUCCESS, payload: data, id }))
      .then(() => dispatch({ type: ACTION_TYPE.LOADDONE }))
      .catch(error => dispatch({ type: ACTION_TYPE.ERROR, error }))
  }
}

async function postData(url, amount, productId, duration, receivingAccount, payment) {
  console.log(`url = ${url}`)
  return fetch(url, {
    method: 'POST',
    headers: {
      Authentication: 'Bearer token',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount, productId, duration, receivingAccount, payment })
  }).then(res => res.json())
}

function postNewLoan(amount, productId, duration, receivingAccount, payment) {
  return async dispatch => {
    try {
      console.log('inside before - postNewLoan')
      const data = await postData(
        URL.postNewLoan,
        amount,
        productId,
        duration,
        receivingAccount,
        payment
      )
      console.log(`inside after - postNewLoan ${JSON.stringify(data)}`)
      dispatch({ type: ACTION_TYPE.POST_NEW_LOAN_SUCCESS, postNewLoanData: data })
    } catch (error) {
      console.log(error)
    }
  }
}

const setDetailId = id => dispatch => dispatch({ type: ACTION_TYPE.SET_DETAIL_ID, id })

export { fetchLoanList, fetchProductList, ACTION_TYPE, fetchDetail, setDetailId, postNewLoan }
