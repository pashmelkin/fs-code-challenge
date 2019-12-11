const app = require('../../app');
const config = require('../../config') ;
const supertest = require('supertest');
const request = supertest(app);

function setConfiguration(number, rotation, sequence)
{
  config.numberEggs = number;
  config.rotation = rotation;
  config.sequence = sequence;
}

test('run endpoint returns json object from configuration', async done => {
  setConfiguration(5, 0.25, '1 2 3 3 5');

  const response = await request.post('/run');
  expect(response.status).toBe(200);
  const message = JSON.stringify(response.body);
  expect(message).toContain("\"number_of_eggs\":5");
  expect(message).toContain("\"rotation_amount\":0.25");
  expect(message).toContain("\"egg\":1,\"was_rotated\":0.25}");
  expect(message).toContain("\"egg\":3,\"was_rotated\":0.5}");
  expect(message).toContain("\"egg\":4,\"was_rotated\":0}");

  done();
})

test('run endpoint returns error when configuration is not set', async done => {
  setConfiguration(0, 0, ' ');
  const response = await request.post('/run');
  expect(response.status).toBe(500);
  done();
})

test('run endpoint returns new value after configuration was changed', async done => {
  setConfiguration(5, 0.25, '1 2 3 4 5');
  let response = await request.post('/run');
  expect(response.status).toBe(200)

  setConfiguration(3, 0.5, '1 2 1 2 1');
  response = await request.post('/run');
  expect(response.status).toBe(200)
  const message = JSON.stringify(response.body);
  expect(message).toContain("\"number_of_eggs\":3");
  expect(message).toContain("\"rotation_amount\":0.5");
  expect(message).toContain("\"egg\":1,\"was_rotated\":1.5}");
  expect(message).toContain("\"egg\":3,\"was_rotated\":0}");
  done();
})
