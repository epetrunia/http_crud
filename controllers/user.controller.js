const { User } = require('./../models');
const _ = require('lodash');

exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    const userData = createdUser.get();
    const preparedUser = _.omit(userData, [
      'passwordHash',
      'updatedAt',
      'createdAt',
    ]);

    res.status(201).send({
      data: preparedUser,
    });
  } catch (e) {
    return next(e);
  }
};

exports.getUserById = async (req, res, next) => {};

exports.getAllUsers = async (req, res, next) => {};

exports.updateUserById = async (req, res, next) => {};

exports.deleteUserById = async (req, res, next) => {};
