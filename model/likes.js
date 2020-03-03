const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("likes", {
    id_like: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: Sequelize.INTEGER
    },
    id_visitor: {
        type: Sequelize.INTEGER
    },
});