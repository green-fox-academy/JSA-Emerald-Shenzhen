import React from 'react'
import loanListFake from '../../../helpers/fakeLoanData'
import LoanList from '../LoanList/LoanList'
import LoanNav from '../LoanNav/LoanNav'

export default function Loan() {
  return (
    <>
      <LoanNav />
      <LoanList loanList={loanListFake.loans} />
    </>
  )
}
