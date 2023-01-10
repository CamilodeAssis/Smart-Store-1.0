const express = require('express');

const UserController = require('./controllers/UserController');
const AdressController = require('./controllers/AdressController');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

const {eAdmin} = require('./middlewares/auth');

const uploadimage = require('./middlewares/uploadimage');


routes.post('/users',  UserController.store)
routes.post('/login', UserController.login)
routes.get('/users',  UserController.index)
routes.get('/', eAdmin, UserController.listar)

routes.post('/users/:user_id/addresses', AdressController.store)
routes.get('/users/:user_id/addresses', AdressController.index)

routes.post('/products',uploadimage.single('image') ,ProductController.store)
routes.get('/products',  ProductController.index)






module.exports = routes;