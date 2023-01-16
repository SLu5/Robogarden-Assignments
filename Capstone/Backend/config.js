const Sequelize = require('sequelize');
const config = new Sequelize("capstone", "root", "Tacopie11", { dialect: 'mariadb' });

module.exports = config;