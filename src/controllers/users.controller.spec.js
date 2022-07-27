const { mockRequest, mockResponse } = require('../util/mock/request');
const UsersController = require('./users.controller');

describe('UsersController', () => {
  it('should', () => {
    let req = mockRequest();
    let res = mockResponse();
    const usersController = new UsersController();
    usersController.index(req, res);
    expect(res.send).toBeCalledTimes(1);
    expect(res.status).toBeCalledTimes(1);
    expect(res.send).toBeCalledWith({
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
