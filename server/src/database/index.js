const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Product = require('../models/Product');
const Invoice = require('../models/Invoice');

const connection = new Sequelize(dbConfig);

User.init(connection);
Product.init(connection);
Invoice.init(connection);


User.associate(connection.models);
Invoice.associate(connection.models);

module.exports = connection;