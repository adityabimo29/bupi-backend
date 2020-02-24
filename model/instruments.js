const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("instruments", {
    id_instrument: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    
});