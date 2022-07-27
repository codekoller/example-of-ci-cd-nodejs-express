const express = require('express');
const UsersController = require('../controllers/users.controller');

const router = express.Router();

const usersController = new UsersController()

router.get('/users', usersController.index)

module.exports = router;
