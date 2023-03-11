var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) {    // 访问http://localhost:3000/api/blog/list
  res.json({
    errno: 0,
    data: [1, 2, 3]
  });
});

router.get('/detail', function(req, res, next) {    // 访问http://localhost:3000/api/blog/detail
  res.json({
    errno: 0,
    data: 'ok'
  });
});

router.post('/', function(req, res, next) {
  console.log(req.user)
  res.send({
    status: 200,
    msg: '请求成功',
    username: req.user.username
  });
});

module.exports = router;
