var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');  // 解析cookie
var logger = require('morgan'); // 写日志

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup  // 当前项目中前端引擎设置（由于本项目前后端分离，所以不需要使用）
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());  // 设置之后，可以在路由中通过request.body获取post传递过来的数据
app.use(express.urlencoded({ extended: false })); // post兼容x-www-form-urlencode等其他格式
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 注册路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};   // 更改环境变量

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
