const Sequelize = require('sequelize');
const dbConfig = require('../Config/database');
const User = require('../Models/User');
const connection = new Sequelize(dbConfig);

User.init(connection);



module.exports = connection;