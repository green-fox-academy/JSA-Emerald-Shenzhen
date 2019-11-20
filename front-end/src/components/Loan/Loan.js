import React from 'react'
import loanList from '../../../helpers/fakeLoanData'
import LoanList from '../LoanList/LoanList'
import LoanNav from '../LoanNav/LoanNav'

export default function Loan() {
  return (
    <>
      <LoanNav />
      <LoanList loanList={loanList.loans} />
    </>
  )
}
