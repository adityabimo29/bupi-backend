const sequelize    = require('./connection');
const {PORT}          = require('./environment');

module.exports = {
    sequelize,
    PORT
}