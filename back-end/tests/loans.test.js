const request = require('supertest');
const app = require('../index.js');

// Valid request
describe('Valid request', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/loans');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('loans');
  })
})

// Missing Authentication header
describe('Missing or incorrect Authentication header', () => {
    it('should return 401 Unauthorized', async () => {
        const res = await request(app)
            .get('/loans');
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('error');
    })
});

// Authorization failed
describe('Incorrect Authentication header', () => {
    it('should return 401 Unauthorized', async () => {
        const res = await request(app)
            .get('/loans')
            .set('Authentication','Incorrect Bearer token');
        expect(res.statusCode).toEqual(401);
        expect(res.body).toHaveProperty('error');
    })
});
