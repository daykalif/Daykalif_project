var express = require('express');
var router = express.Router();

router.post('/register', function(req, res, next) {
  const { username, email, password, passwordConfirm } = req.body;
  res.json({
    success: true,
    code: 200,
    data: {
      username,
      email,
      password,
      passwordConfirm
    },
    errorMsg: {},
  });
});

module.exports = router;
