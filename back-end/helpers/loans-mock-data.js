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
  ]
}

const authMissingError = {
  error: 'Authentication header is missing!'
}

const authFailedError = {
  error: 'User is not allowed to do this action!'
}

module.exports = { data, authMissingError, authFailedError }
