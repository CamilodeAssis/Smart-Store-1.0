const express = require('express');
const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');

const routes = express.Router();


routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/users/:user_id/addresses', AdressController.store)
routes.get('/users/:user_id/addresses', AdressController.index)

module.exports = routes;