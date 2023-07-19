const mockCreateClient = {
  isOpen: false,
  connect: jest.fn().mockImplementation(() => mockCreateClient.isOpen = true),
  quit: jest.fn().mockImplementation(() => mockCreateClient.isOpen = false),
  set: jest.fn(),
  get: jest.fn().mockResolvedValue('fakeValue')
} as any

jest.mock('redis', () => ({
  createClient: jest.fn().mockReturnValue(mockCreateClient)
}))

import RedisCacheData from "@infraestructure/cache/RedisCacheData"

describe('RedisCacheData', () => {
  it('should instance RedisCacheData successfully', () => {
    const redisCacheData = new RedisCacheData()
    expect(redisCacheData instanceof RedisCacheData).toBe(true)
  })

  it('should set a cache data successfully', async () => {
    const redisCacheData = new RedisCacheData()

    await redisCacheData.set('fakeKey', 'fakeValue')
    expect(mockCreateClient.connect).toBeCalled()
    expect(mockCreateClient.set).toBeCalled()
    expect(mockCreateClient.quit).toBeCalled()
  })

  it('should get a cache data successfully', async () => {
    const redisCacheData = new RedisCacheData()

    const result = await redisCacheData.get('fakeKey')
    expect(mockCreateClient.connect).toBeCalled()
    expect(mockCreateClient.get).toBeCalled()
    expect(mockCreateClient.quit).toBeCalled()
    expect(result).toBe('fakeValue')
  })
})