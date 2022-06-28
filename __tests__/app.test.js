const request = require('supertest');
const app = require('../src/app');

describe('App Test', () => {
  it('should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should response return with message correct', async () => {
    const response = await request(app).get('/');
    expect(response.body).toEqual({ message: 'Hello world!' });
  });
});
