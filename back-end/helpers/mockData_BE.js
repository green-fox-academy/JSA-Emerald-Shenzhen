const data = {
  loans: [
    {
      id: 1,
      type: {
        id: 1,
        slug: 'student',
        name: 'Student Loan',
        duration: '5 years fixed',
        interest: 0.03
      },
      remaining: 3400
    }
  ],
  products: [
    {
      id: 1,
      slug: 'student',
      name: 'Student Loan',
      duration: '5 years fixed',
      icon: 'student',
      title: '3% yearly interest rate',
      description: 'Fixed low interests for students only',
      interest: 0.03
    }
  ],
  loan: [{ id: 1, userId: 1, productId: 1, remaining: 3500 }],
  loanServiceTestExpectResult: [
    {
      id: 1,
      remaining: {
        id: 1,
        productId: 1,
        remaining: 3500,
        userId: 1
      },
      type: {
        id: 1,
        slug: 'student',
        name: 'Student Loan',
        duration: '5 years fixed',
        icon: 'student',
        title: '3% yearly interest rate',
        description: 'Fixed low interests for students only',
        interest: 0.03
      },
      userId: 1
    }
  ],
  loansDetails: {
    id: 1,
    type: {
      id: 1,
      slug: 'student',
      name: 'Student Loan',
      duration: '5 years fixed',
      interest: 0.03
    },
    remaining: 3400,
    history: [
      {
        date: '2019-11-22',
        text: '$900 payment received',
        type: 'payment',
        amount: -900,
        remaining: 3400
      },
      {
        date: '2019-01-03',
        text: '2018 yearly interest $125',
        type: 'interest',
        amount: 125,
        remaining: 4300
      }
    ]
  }
}
module.exports = data
