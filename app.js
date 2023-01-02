require('dotenv').config('.env');
var http = require('http');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

//connect db
// require('./bin/connect_mongo');
// require('./bin/connect_redis');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error = new Error("Url Not found");
  error.status = 200;
  next(error);
});

// error handler
app.use(function(error, req, res, next) {
  console.log(error);
  res.status(error.status || 500).send({
    error: {
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
    },
  });
});

let port = process.env.PORT || '3000';
var server = http.createServer(app);
server.listen(port, ()=>{
  console.log(`Server listening on port ${port}`);
});
