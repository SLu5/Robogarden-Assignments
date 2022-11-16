const Sequelize = require('sequelize');
const config = require('./../config');

const Task = config.define('Task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority_level: {
        type: Sequelize.STRING,
        allowNull: false
    },
    progress_level: {
        type: Sequelize.STRING,
        allowNull: false
    },
    task_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Task;