var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');  // 解析cookie
var logger = require('morgan'); // 写日志

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogRouter = require('./routes/blog');
const userRouter = require('./routes/user');
const registerRouter = require('./routes/register');

var app = express();

// view engine setup  // 当前项目中前端引擎设置（由于本项目前后端分离，所以不需要使用）
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());  // 设置之后，可以在路由中通过request.body获取post传递过来的数据; post兼容application/json格式
app.use(express.urlencoded({ extended: false })); // post兼容application/x-www-form-urlencode格式
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 注册路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);
app.use('/api/user', registerRouter);



// ---------------探究中间件的执行逻辑----------------
app.use((req, res, next) => {
  console.log('请求开始...', req.method, req.url);
  next()
});

app.use((req, res, next) => {
  // 假设设置cookie
  req.cookie = {
    userId: 'abc123'
  }
  next()
});

app.use((req, res, next) => {
  // 假设处理post data
  // 异步
  setTimeout(() => {
    req.body = {
      a: 100,
      b: 200
    }
    next()
  })
});


app.use('/api', (req, res, next) => {
  console.log('处理 /api 路由')
  next()
});

app.get('/api', (req, res, next) => {
  console.log('get /api 路由')
  next()
});

app.post('/api', (req, res, next) => {
  console.log('post /api 路由')
  next()
});

// 模拟登陆验证
function loginCheck(req, res, next) {
  setTimeout(() => {
    if (true) {
      console.log('模拟登陆成功')
      next()
    } else {
      console.log('模拟登陆失败')
      res.json({
        errorno: -1,
        msg: '登陆失败'
      })
    }
  })
}

app.get('/api/get-cookie', loginCheck, (req, res, next) => {    // 访问：http://localhost:3000/api/get-cookie
  console.log('get /api/get-cookie')
  res.json({
    errorno: 0,
    data: req.cookie
  })
});

app.post('/api/get-post-data', loginCheck, (req, res, next) => {    // postman访问：http://localhost:3000/api/get-post-data
  console.log('get /api/get-post-data')
  res.json({
    errorno: 0,
    data: req.body
  })
});
// ---------------探究中间件的执行逻辑----------------


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
