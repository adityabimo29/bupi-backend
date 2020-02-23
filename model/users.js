const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("users", {
    id_user: {
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
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    id_role: {
        type: Sequelize.INTEGER,
        defaultValue:2
    },
    created: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
});