const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("roles", {
    id_role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    
});