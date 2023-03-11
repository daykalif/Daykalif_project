const Joi = require('@hapi/joi');

/**
 * 封装校验规则
 * 
 * schema:规则；req.body:数据
 * @param {*} schema 
 * @returns 
 */
module.exports = schema => (req, res, next) => {
  const { error } = Joi.object(schema).validate(req.body);
  if (error) {
    throw error;
  }
  next();
}