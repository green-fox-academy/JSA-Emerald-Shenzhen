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
      remaining: 3500,
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
  historyList: [
    {
      id: 1,
      history: [
        {
          date: '2018-02-20',
          text: '$100 payment received',
          type: 'payment',
          amount: -100,
          remaining: 4980
        },
        {
          date: '2018-04-1',
          text: '$1000 payment received',
          type: 'payment',
          amount: -1000,
          remaining: 3980
        },
        {
          date: '2018-09-13',
          text: '$500 payment received',
          type: 'payment',
          amount: -500,
          remaining: 3480
        },
        {
          date: '2018-10-22',
          text: '$200 payment received',
          type: 'payment',
          amount: -200,
          remaining: 3280
        },
        {
          date: '2018-12-15',
          text: '2018 yearly interest $120',
          type: 'interest',
          amount: 120,
          remaining: 3400
        }
      ]
    },
    {
      id: 2,
      history: [
        {
          date: '2017-05-31',
          text: '$50 payment received',
          type: 'payment',
          amount: -50,
          remaining: 3000
        },
        {
          date: '2017-07-01',
          text: '$50 payment received',
          type: 'payment',
          amount: -50,
          remaining: 2950
        },
        {
          date: '2017-10-24',
          text: '$100 payment received',
          type: 'payment',
          amount: -100,
          remaining: 2850
        },
        {
          date: '2017-12-15',
          text: '2017 yearly interest $120',
          type: 'interest',
          amount: 100,
          remaining: 2950
        },
        {
          date: '2018-01-01',
          text: '$300 payment received',
          type: 'payment',
          amount: -300,
          remaining: 2650
        },
        {
          date: '2018-12-06',
          text: '$300 payment received',
          type: 'payment',
          amount: -300,
          remaining: 2350
        },
        {
          date: '2018-12-15',
          text: '2018 yearly interest $90',
          type: 'payment',
          amount: 90,
          remaining: 2440
        },
        {
          date: '2019-02-22',
          text: '$200 payment received',
          type: 'payment',
          amount: -200,
          remaining: 2240
        },
        {
          date: '2019-03-11',
          text: '$1000 payment received',
          type: 'interest',
          amount: -1000,
          remaining: 1240
        }
      ]
    },
    {
      id: 3,
      history: [
        {
          date: '2019-11-22',
          text: '$900 payment received',
          type: 'payment',
          amount: -900,
          remaining: 3400
        },
        {
          date: '2019-12-03',
          text: '2018 yearly interest $125',
          type: 'interest',
          amount: 125,
          remaining: 4300
        }
      ]
    }
  ]
}
module.exports = data
