const express = require('express');

const routers = express();

const UsersController = require('../controllers/users.controller');
const usersController = new UsersController();

routers.use(express.json());

routers.get('/', usersController.index);

routers.get('/users', usersController.show);

module.exports = routers;
