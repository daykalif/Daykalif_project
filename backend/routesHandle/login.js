const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const config = require('../config');


module.exports = (req, res) => {

  // 1.查询用户是否存在
  const sql = 'SELECT * FROM user WHERE username=?';
  if (!req.body.username || !req.body.password) {
    return res.send({
      status: 501,
      msg: '请输入正确的用户名或密码',
    });
  }

  db(sql, req.body.username, result => {
    if (result.length !== 1) {
      return res.send({
        status: 501,
        msg: '此用户不存在',
      });
    }

    // 2.如果存在就进行密码比较
    const passwordRes = bcrypt.compareSync(req.body.password, result[0].password);
    if (!passwordRes) {
      return res.send({
        status: 501,
        msg: '密码错误',
      })
    }

    // 3.根据用户信息生成token
    const token = jwt.sign({ username: req.body.username }, config.jwtKey, { expiresIn: '1h' });
    return res.send({
      status: 200,
      msg: '登陆成功',
      token,
    });
  });
}
