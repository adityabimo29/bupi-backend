const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("genres", {
    id_genre: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
});