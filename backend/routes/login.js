const express = require('express');
const router = express.Router();

// mock login
const loginMockHandle = require('../routesHandle/login_mock');
router.post('/login_mock', loginMockHandle);


// 真实 login
const loginHandle = require('../routesHandle/login');
router.post('/login', loginHandle);

module.exports = router;
