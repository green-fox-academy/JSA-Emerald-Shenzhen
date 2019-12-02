const ERROR = require('../../helpers/errors')

const commonAuthTest = (method, path) => {
  describe('Missing or incorrect Authentication header', () => {
    it('should return 401 Unauthorized', done => {
      method(path)
        .expect('Content-Type', /json/)
        .expect(401, { error: ERROR.authMissingError }, done)
    })
  })

  describe('Incorrect Authentication header', () => {
    it('should return 403 Unauthorized', done => {
      method(path)
        .set('Authentication', 'Incorrect Bearer token')
        .expect('Content-Type', /json/)
        .expect(403, { error: ERROR.authFailedError }, done)
    })
  })
}

module.exports = commonAuthTest
