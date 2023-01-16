const Sequelize = require('sequelize');
const config = require('./../config');

const Sale = config.define('Sale', {
    sale_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    item_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    total_sell_price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    quantity_sold: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Sale;