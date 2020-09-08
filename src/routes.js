const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');

routes.get('/', UserController.index);
routes.post('/show', UserController.create);

module.exports = routes;