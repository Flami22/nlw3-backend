const express = require('express');
const AuthMidleware = require('./Midlewares/AuthMidleware')
const UserController = require('./Controllers/UserController');
const AuthController = require('./Controllers/AuthController');
const routes = express.Router();

routes.get('/users/:id', AuthMidleware, UserController.index);
routes.post('/users', UserController.store);
routes.post('/login', AuthController.index);

module.exports = routes;