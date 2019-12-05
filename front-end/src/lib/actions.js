import URL from './URL'

const ACTION_TYPE = {
  LOADING: 'LOADING',
  LOADDONE: 'LOADDONE',
  INIT_LOANLIST: 'INIT_LOANLIST',
  INIT_LOANLIST_SUCCESS: 'INIT_LOANLIST_SUCCESS',
  INIT_PRODUCTLIST: 'INIT_PRODUCTLIST',
  INIT_PRODUCTLIST_SUCCESS: 'INIT_PRODUCTLIST_SUCCESS'
}

async function fetchData(url) {
  console.log(URL)
  console.log(`Outside fetchData return : ${Object.entries(URL)}`)
  console.log(`Outside fetchData return : ${URL.getProducts}`)
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
  console.log(`Outside fetchProductList try : ${Object.entries(URL)}`)
  console.log(`Outside fetchProductList try : ${URL.getProducts}`)
  return async dispatch => {
    dispatch({ type: ACTION_TYPE.LOADING })
    dispatch({ type: ACTION_TYPE.INIT_PRODUCTLIST })

    try {
      console.log(`Inside fetchProductList try : ${Object.entries(URL)}`)
      console.log(`Inside fetchProductList try : ${URL.getProducts}`)
      const data = await fetchData(URL.getProducts)
      dispatch({ type: ACTION_TYPE.INIT_PRODUCTLIST_SUCCESS, productList: data })
      dispatch({ type: ACTION_TYPE.LOADDONE })
    } catch (error) {
      // dispatch({ type: ACTION_TYPE.ERROR, error })
      console.log(error)
    }
  }
}

export { fetchLoanList, fetchProductList, ACTION_TYPE }
