const Sequelize = require('sequelize');
const  {host,db,username,password}   = require('./environment');

// const connection = mysql.createConnection({
//     host: host,
//     user: username,
//     password:password,
//     database: db
// });
const sequelize = new Sequelize(db, username, password, {
    host:host,
    dialect: 'mysql',
    define: {
      timestamps: false
    },
  })

module.exports = sequelize;