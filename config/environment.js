require('dotenv').config();
module.exports ={
    host:process.env.HOST_DB,
    db:process.env.DATABASE,
    username:process.env.USER_DB,
    password:process.env.PASS_DB,
    PORT:process.env.PORT
}