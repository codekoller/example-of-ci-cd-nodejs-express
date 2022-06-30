class UsersController {
  index(_req, res) {
    res.status(200).send({ message: 'new router.' });
  }

  show(req, res) {
    res.status(200).send({
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
  }
}

module.exports = UsersController;
