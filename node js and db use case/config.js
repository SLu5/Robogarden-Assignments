const Sequelize = require('sequelize');
const config = new Sequelize("robogarden", "root", "Tacopie11", { dialect: 'mariadb' });

module.exports = config;

