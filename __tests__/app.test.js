const request = require('supertest');
const app = require('../src/app');

describe('App Test', () => {
  it('should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(404);
  });

  it('should response return with message correct', async () => {
    const response = await request(app).get('/');
    expect(response.body).toStrictEqual({});
  });

  it('should response return list users', async () => {
    const response = await request(app).get('/users');
    expect(response.body).toEqual({
      users: [
        {
          id: 1,
          name: 'Peggy J. Schmidt',
          age: 40,
        },
        {
          id: 2,
          name: 'Joy G. Musick',
          age: 34,
        },
      ],
    });
  });
});
