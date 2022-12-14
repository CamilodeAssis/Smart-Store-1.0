const express = require('express');

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');


const routes = express.Router();

const {eAdmin} = require('./middlewares/auth')

routes.post('/users', UserController.store)
routes.post('/users/login', UserController.login)
routes.get('/users', UserController.index)
routes.get('/', eAdmin, UserController.listar)

routes.post('/users/:user_id/addresses', AdressController.store)
routes.get('/users/:user_id/addresses', AdressController.index)




module.exports = routes;