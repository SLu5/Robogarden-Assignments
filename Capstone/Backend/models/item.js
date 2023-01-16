const Sequelize = require('sequelize');
const config = require('./../config');

const Item = config.define('Item', {
    item_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    SKU: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    quantity_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    intended_sale_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Item;