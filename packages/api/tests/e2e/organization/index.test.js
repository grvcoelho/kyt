const { server } = require('../../../server')
const database = require('../../../database')
const { connect } = require('../../../database/lib')

const request = require('supertest')

beforeAll(async () => {
  await connect(database)
})

describe('Organization', () => {
  test('create with valid parameters', async () => {
    const { body, statusCode } = await request(server)
      .post('/api/organizations')
      .send({
        name: 'Spritz Inc',
      })

    expect(statusCode).toBe(201)
    expect(body).toEqual(expect.objectContaining({
      name: 'Spritz Inc',
    }))
  })
})
