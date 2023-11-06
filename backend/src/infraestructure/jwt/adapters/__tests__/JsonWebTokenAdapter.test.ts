jest.mock('@config/Config', () => ({
  JWT_SECRET_KEY: 'fakeSecretKey'
}))

import JsonWebTokenAdapter from "../JsonWebTokenAdapter"

describe('JsonWebTokenAdapter', () => {
  it('should create a valid token', () => {
    const $JsonWebTokenAdapter = new JsonWebTokenAdapter()
    const $token = $JsonWebTokenAdapter.createToken({ name: 'nicolas' })
    const $decodedJwt = $JsonWebTokenAdapter.vakidateToken($token)
    expect($decodedJwt).toMatchObject({ name: 'nicolas' })
  })
})
