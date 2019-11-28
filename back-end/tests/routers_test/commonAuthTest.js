// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest')
const app = require('../../app')
const ERROR = require('../../helpers/errors')

const methodMap = {
  get: request(app).get,
  post: request(app).post
}

const commonAuthTest = (method, endpoint) => {
  describe('Missing or incorrect Authentication header', () => {
    it('should return 401 Unauthorized', done => {
      methodMap[method](endpoint)
        .expect('Content-Type', /json/)
        .expect(401, { error: ERROR.authMissingError }, done)
    })
  })

  describe('Incorrect Authentication header', () => {
    it('should return 403 Unauthorized', done => {
      methodMap[method](endpoint)
        .set('Authentication', 'Incorrect Bearer token')
        .expect('Content-Type', /json/)
        .expect(403, { error: ERROR.authFailedError }, done)
    })
  })
}

module.exports = commonAuthTest
