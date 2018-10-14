const { server } = require('../../../server')
const request = require('supertest')

describe('server configuration', () => {
  test('GET /_health_check should return 200', async () => {
    const response = await request(server).get('/_health_check')

    expect(response.statusCode).toBe(200)
  })
})
