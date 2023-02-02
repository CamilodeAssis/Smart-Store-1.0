const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Product = require('../models/Product');
const Invoice = require('../models/Invoice');
const Purchase = require('../models/Purchase');

const connection = new Sequelize(dbConfig);

User.init(connection);
Product.init(connection);
Invoice.init(connection);
Purchase.init(connection);


User.associate(connection.models);
Invoice.associate(connection.models);
Purchase.associate(connection.models);

module.exports = connection;