const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const InvoiceController = require('./controllers/InvoiceController');

const routes = express.Router();

const {eAdmin} = require('./middlewares/auth');

const uploadimage = require('./middlewares/uploadimage');
const imageuser = require('./middlewares/imageuser');
const PurchaseController = require('./controllers/PurchaseController');


routes.post('/users',imageuser.single('image'),  UserController.store)
routes.post('/login', UserController.login)
routes.get('/users',  UserController.index)
routes.get('/', eAdmin, UserController.listar)


routes.post('/products',uploadimage.single('image') ,ProductController.store)
routes.get('/products',  ProductController.index)
routes.get('/dashboard/products',  ProductController.getProducts)
routes.get('/home/products',  ProductController.getProductByDepartment)

routes.post('/users/:user_id/invoices', InvoiceController.store)
routes.get('/users/:user_id/invoices',  InvoiceController.index)


routes.post('/users/:user_id/purchases', PurchaseController.store)

routes.get('/purchases', PurchaseController.index)







module.exports = routes;