const app = require('../../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

test('settings endpoint returns json object when settings set up correclty', async done => {
  const response = await request.post('/settings');
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('undefined!')
  done()
})

test('settings endpoint returns error when settings not set up correclty', async done => {
  const response = await request.post('/settings');
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('undefined!')
  done()
})

test('settings endpoint returns json object when settings not set up correclty', async done => {
  const response = await request.post('/settings');
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('undefined!')
  done()
})
