const Sequelize = require("sequelize");
const { sequelize } = require("../config");

module.exports = sequelize.define("users", {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    avatar:{
        type: Sequelize.STRING
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
        type: Sequelize.INTEGER
    },
    id_genre: {
        type: Sequelize.INTEGER
    },
    experience: {
        type: Sequelize.INTEGER
    },
    about: {
        type: Sequelize.STRING
    },
    link_video: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.STRING,
        defaultValue:'on'
    },
    created: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
});