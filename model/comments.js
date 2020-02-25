const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("comments", {
    id_comment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    id_user:{
        type:Sequelize.INTEGER
    },
    id_guest:{
        type:Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    message:{
        type:Sequelize.STRING
    },
    created: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
});