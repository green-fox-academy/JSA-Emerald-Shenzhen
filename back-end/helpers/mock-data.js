const mockData = {
  products: [
    {
      id: 1,
      slug: "student",
      name: "Student Loan",
      duration: "5 years fixed",
      icon: "student",
      title: "3% yearly interest rate",
      description: "Fixed low interests for students only",
      interest: 0.03
    }
  ]
};

const mockError = {
  error: "Authentication header is missing!"
};

module.exports = { mockData, mockError };
