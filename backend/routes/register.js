const express = require('express');
const router = express.Router();

const valid = require('../middleware/valid');
const { registerSchema } = require('../schema/register');

const registerHandle = require('../routesHandle/register');

router.post('/register', valid(registerSchema), registerHandle);

module.exports = router;
