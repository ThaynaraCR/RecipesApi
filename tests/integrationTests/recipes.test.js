require('dotenv').config();
const request = require('supertest');
const routes = require('../../routes/devPro');
const app = require('../../app');
const mongoose = require('mongoose');
app.use(routes);
const req = request(app);

let body = {
  name: "oi",
  ingredients: "oi",
  description: "oi"
}

beforeAll(done => {
  done()
})

afterAll(done => {
  mongoose.connection.close()
  done()
})

describe('Configuration tests', () => {

  test('Shoud create a recipe', async () => {
    const res = await req.post('/api/', body)
    expect(res.status).toEqual(201);
    expect(res.body).toEqual(expect.any(Object));
    body._id = res.body._id
  });

  test('Shoud get all recipes', async () => {
    const res = await req.get('/api/')
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.any(Object));
  });

  test('Shoud get recipe by Id', async () => {
    const res = await req.get(`/api/${body._id}`)
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.any(Object));
  });

  test('Shoud update a recipe', async () => {
    const res = await req.put(`/api/${body._id}`, body)
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.any(Object));
  });
  
  test('Shoud delete a recipe', async () => {
    const res = await req.get(`/api/${body._id}`)
    expect(res.status).toEqual(200);
  });

});
