const { User } = require('./../models');
const _ = require('lodash');
const e = require('express');

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

exports.getUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const requestedUser = await User.findOne({
      where: { id: userId },
      attributes: { exclude: ['passwordHash', 'updatedAt', 'createdAt'] },
    });
    if (requestedUser) {
      res.status(200).send({ data: requestedUser });
    }
    res.status(404).send({ message: `User with id ${userId} not found` });
  } catch (e) {
    next(e);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: { exclude: ['passwordHash', 'updatedAt', 'createdAt'] },
    });
    res.status(200).send({ data: allUsers });
  } catch {
    return next(e);
  }
};

exports.updateUserById = async (req, res, next) => {
  const {
    body,
    params: { userId },
  } = req;
  try {
    const requestedUser = await User.findOne({
      where: { id: userId },
      attributes: { exclude: ['passwordHash', 'updatedAt', 'createdAt'] },
    });
    if (requestedUser) {
      const updatedUser = await requestedUser.update(body);
      res.status(200).send({ data: updatedUser });
    }
    res.status(404).send({ message: `User with id ${userId} not found` });
  } catch (e) {
    return next(e);
  }
};

exports.deleteUserById = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const result = await User.destroy({
      where: { id: userId },
    });
    if (result) {
      res.status(204).send({ message: `User with id ${userId} was deleted` });
    }
    res.status(404).send({ message: `User with id ${userId} not found` });
  } catch (e) {
    return next(e);
  }
};
