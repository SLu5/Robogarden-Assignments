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
    sell_price_per_unit: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    quantity_sold: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    value_of_goods: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Sale;