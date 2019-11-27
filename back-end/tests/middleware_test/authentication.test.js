const auth = require('../../middleware/auth')
const ERROR = require('../../helpers/errors')

const mockRequestWithAuth = authentication => ({
  headers: {
    authentication
  }
})

const mockRequestMissingAuth = () => ({
  headers: {}
})

const mockResponse = () => {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('Test auth(req, res, next) middleware', () => {
  test('auth should fail for missing request property', () => {
    const req = mockRequestMissingAuth()
    const res = mockResponse()
    const next = jest.fn()
    auth(req, res, next)
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({ error: ERROR.authMissingError })
  })

  test('auth should fail for invalid request property', () => {
    const req = mockRequestWithAuth('Wrong token')
    const res = mockResponse()
    const next = jest.fn()
    auth(req, res, next)
    expect(res.status).toHaveBeenCalledWith(403)
    expect(res.json).toHaveBeenCalledWith({ error: ERROR.authFailedError })
  })

  test('auth should call next() middleware', () => {
    const req = mockRequestWithAuth('Bearer token')
    const next = jest.fn()
    auth(req, {}, next)
    expect(next).toBeCalled()
  })
})
