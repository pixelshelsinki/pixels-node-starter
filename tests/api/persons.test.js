const supertest = require('supertest')
const app = require('../../app')

const api = supertest(app)

describe('Testing GET: /api/persons', () => {
  test('Returns status 200 OK', async () => {
    await api
      .get('/api/persons')
      .expect(200)
  })

  test('Returns all 3 persons', async () => {
    const response = await api.get('/api/persons')

    expect(response.body.length).toBe(3)
  })
})

describe('Testing POST: /api/persons', () => {
  const newPerson = {
    firstName: 'Alexander',
    lastName: 'Stepanov',
    email: 'alexander@test.fi',
  }

  test('Creates new person', async () => {
    await api
      .post('/api/persons')
      .send(newPerson)
      .expect(201)
  })

  test('Returns 4 persons after insert', async () => {
    const response = await api.get('/api/persons')

    expect(response.body.length).toBe(4)
  })
})

afterAll(() => {
  app.destroy()
});
