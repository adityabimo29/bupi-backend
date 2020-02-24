const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("authors", {
    id_author: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    }
});