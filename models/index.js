// models/index.js
const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.data_connect);

// Import models
const User = require('./user')(sequelize, Sequelize.DataTypes);
const Rule = require('./rule')(sequelize, Sequelize.DataTypes);

// Export models and sequelize for use in the application
module.exports = { sequelize, Sequelize, User, Rule };
