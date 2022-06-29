const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello world!' });
});

app.get('/users', (_req, res) => {
  res.status(200).send({
    users: [
      {
        id: 1,
        name: 'Peggy J. Schmidt',
      },
      {
        id: 2,
        name: 'Joy G. Musick',
      },
    ],
  });
});

module.exports = app;
