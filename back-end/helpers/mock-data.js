const data = {
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

const error = {
  error: "Authentication header is missing!"
};

module.exports = { data, error };
