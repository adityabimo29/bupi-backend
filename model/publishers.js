const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("publishers", {
    id_publisher: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    
});