var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');  

var app = express();

const swaggerOptions = {  
  swaggerDefinition: {  
      info: {  
          title:'Workcom API',  
          version:'1.0.0'  
      }  
  },  
  apis: ['./routes/*.js'], 
}  
const swaggerDocs = swaggerJSDoc(swaggerOptions);  
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/users',  require('./routes/users'));
app.use('/', require('./routes/auth'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
