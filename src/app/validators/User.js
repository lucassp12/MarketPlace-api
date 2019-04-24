const Joi = require("joi");

module.exports = {
  body: {
    password: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .required()
      .min(6)
  }
};
