const data = {
  loans: [
    {
      id: 1,
      type: {
        id: 132465,
        slug: 'student',
        name: 'Student Loan',
        duration: '5 years fixed',
        interest: 0.03
      },
      remaining: 3400
    },
    {
      id: 2,
      type: {
        id: 132465,
        slug: 'student',
        name: 'Student Loan',
        duration: '5 years fixed',
        interest: 0.03
      },
      remaining: 1000
    },
    {
      id: 3,
      type: {
        id: 333,
        slug: 'student',
        name: 'Student Loan',
        duration: '5 years fixed',
        interest: 0.05
      },
      remaining: 2000
    },
    {
      id: 4,
      type: {
        id: 555,
        slug: 'student',
        name: 'Student Loan',
        duration: '5 years fixed',
        interest: 0.04
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
      description:
        'Fixed low interests for students only Fixed low interests for students only Fixed low interests for students only',
      interest: 0.03
    },
    {
      id: 2,
      slug: 'unsecured',
      name: 'Unsecured',
      duration: '5 years fixed',
      icon: 'student',
      title: '3% yearly interest rate',
      description:
        'Fixed low interests for students only Fixed low interests for Unsecured only Fixed low interests for students only',
      interest: 0.03
    },
    {
      id: 3,
      slug: 'pay day',
      name: 'Pay day',
      duration: '5 years fixed',
      icon: 'student',
      title: '3% yearly interest rate',
      description:
        'Fixed low interests for students only Fixed low interests for Pay day only Fixed low interests for students only',
      interest: 0.03
    },
    {
      id: 4,
      slug: 'secured',
      name: 'Secured',
      duration: '5 years fixed',
      icon: 'student',
      title: '3% yearly interest rate',
      description:
        'Fixed low interests for students only Fixed low interests for Secured only Fixed low interests for students only',
      interest: 0.03
    }
  ],
  receivingAccount: [
    {
      id: 1,
      label: 'Salary Account',
      value: 'Salary Account'
    },
    {
      id: 2,
      label: 'Pocket Money Account',
      value: 'Pocket Money Account'
    },
    {
      id: 3,
      label: 'Investment Account',
      value: 'Investment Account'
    },
    {
      id: 4,
      label: 'Stock Account',
      value: 'Stock Account'
    }
  ],
  defaultPayment: [
    {
      id: 1,
      label: 'Monthly from default account',
      value: 'month'
    },
    {
      id: 2,
      label: 'Manually',
      value: 'day'
    }
  ],
  detailedLoans: [
    {
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
    },
    {
      id: 2,
      type: {
        id: 132465,
        slug: 'student',
        name: 'Student Loan',
        duration: '5 years fixed',
        interest: 0.03
      },
      remaining: 1000
    }
  ]
}

export default data
