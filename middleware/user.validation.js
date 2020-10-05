const yup = require('yup');
const {
  CREATE_USER_SCHEMA,
  UPDATE_USER_SCHEMA,
} = require('../utils/validation');

module.exports.validateCreatedUser = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await CREATE_USER_SCHEMA.validate(body);
    next();
  } catch (e) {
    next(e);
  }
};

module.exports.validateUpdatedUser = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await UPDATE_USER_SCHEMA.validate(body);
    next();
  } catch (e) {
    next(e);
  }
};
