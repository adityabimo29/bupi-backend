var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Added Library
const cors      = require('cors');
const jwt  = require('express-jwt');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.use(jwt({secret:"bupi-secret"}).unless({
//     path:[
//         {url:'/',methods:['GET']},
//         {url:'/blogs',methods:['GET']},
//         {url:/^\/blogs\/detail\/.*/,methods:['GET']},
//         {url:/^\/assets\/.*/,methods:['GET']},
//         {url:'/users/login',methods:['POST']},
//         {url:'/users/register',methods:['POST']},
//     ]
// }))

// app.use(function (err, req, res, next) {
//     if (err.name !== 'UnauthorizedError') {
//       //res.status(401).send('You can\'t access this data ');
//       next();
//     }else{
//         res.status(401).send('You can\'t access this data ');
//     }
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/assets',express.static('assets'));
module.exports = app;
