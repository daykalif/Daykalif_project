var express = require('express');
var router = express.Router();



/**
 * postman访问http://localhost:3000/api/user/login，请求方式改为POST；
 * 
 * 方式一：
 * Body选择raw，格式改为JSON
    {
        "username":"zhangsan",
        "password":123
    }

  方式二：
  Body选择x-www-form-urlencode，
  KEY           VALUE
  username      zhangsan
  password      123

  点击send按钮，即可查看到res.json
 */

router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  res.json({
    errno: 0,
    data: {
      username,
      password,
    }
  });
});

module.exports = router;
