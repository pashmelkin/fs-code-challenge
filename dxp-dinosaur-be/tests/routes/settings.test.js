const app = require('../../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

test('settings endpoint returns json object when settings set up correclty', async done => {
  const response = await
      request
      .put('/settings')
      .send({numberOfEggs: 3, rotation: 0.25, sequence: '1 2 3'})
      .set('Accept', 'application/json');

  expect(response.status).toBe(202)
  done()
})

test('settings endpoint returns error when sequence is wrong', async done => {
  const response = await
      request
      .put('/settings')
      .send({numberOfEggs: 3, rotation: 0.25, sequence: '1 2 4'})
      .set('Accept', 'application/json');

  expect(response.status).toBe(400);
  const message = JSON.stringify(response.body).toLowerCase();
  expect(message).toContain("wrong sequence");
  done()
})

test('settings endpoint returns error when rotation is wrong', async done => {
  const response = await
      request
      .put('/settings')
      .send({numberOfEggs: 3, rotation: 125, sequence: '1 2 3'})
      .set('Accept', 'application/json');

  expect(response.status).toBe(400)
  const message = JSON.stringify(response.body).toLowerCase();
  expect(message).toContain("wrong rotation");
  done()
})

test('settings endpoint returns error when all settings are wrong', async done => {
  const response = await
      request
      .put('/settings')
      .send({numberOfEggs: -1, rotation: 1.25, sequence: 'a'})
      .set('Accept', 'application/json');

  expect(response.status).toBe(400)
  done()
})

test('settings endpoint post should not be found', async done => {
  const response = await request.post('/settings');
  expect(response.status).toBe(404)
  done()
})

//TODO: Consider tests with mocking Validate functions
