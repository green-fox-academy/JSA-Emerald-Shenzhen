const request = require("supertest");
const app = require("../app");

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

//==================== products API test ====================

describe("GET /products", () => {
  it("should return products", async () => {
    const res = await request(app)
      .get("/products")
      .set({
        Accept: "application/json",
        Authentication: "Bearer token"
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockData);
  });

  it("should return error", async () => {
    const res = await request(app).get("/products");
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual(mockError);
  });
});
