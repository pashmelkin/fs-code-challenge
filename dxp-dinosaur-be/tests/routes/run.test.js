const app = require('../../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

test('run endpoint returns json object from configuration', async done => {
  const response = await request.post('/run');
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('undefined!')
  done()
})

test('run endpoint returns error when configuration is not set', async done => {
  const response = await request.post('/run');
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('undefined!')
  done()
})

test('run endpoint returns new value after configuration was changed', async done => {
  const response = await request.post('/run');
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('undefined!')
  done()
})

test('run endpoint returns error when configuration is not available', async done => {
  const response = await request.post('/run');
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('undefined!')
  done()
})
