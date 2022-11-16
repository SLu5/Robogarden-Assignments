const Sequelize = require('sequelize');
const config = new Sequelize("robosolutions", "root", "Tacopie11", { dialect: 'mariadb' });

module.exports = config;