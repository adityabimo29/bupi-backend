const mysql = require('mysql2');
const  {host,db,username,password}   = require('./environment');

const connection = mysql.createConnection({
    host: host,
    user: username,
    password:password,
    database: db
});

module.exports = connection;