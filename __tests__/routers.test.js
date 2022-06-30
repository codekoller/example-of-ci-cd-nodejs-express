const request = require('supertest');
const routers = require('../src/routers');

describe('App Test', () => {
  it('should response the GET method', async () => {
    const response = await request(routers).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should response return with message correct', async () => {
    const response = await request(routers).get('/');
    expect(response.body).toEqual({ message: 'new router.' });
  });

  it('should response return list users', async () => {
    const response = await request(routers).get('/users');
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
