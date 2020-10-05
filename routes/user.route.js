const express = require('express');
const {
  validateCreatedUser,
  validateUpdatedUser,
} = require('../middleware/user.validation');
const UserController = require('../controllers/user.controller');

const UserRouter = express.Router();

UserRouter.post('/user', validateCreatedUser, UserController.createUser);
UserRouter.route('/users/:userId')
  .get(UserController.getUserById)
  .patch(validateUpdatedUser, UserController.updateUserById)
  .delete(UserController.deleteUserById);
UserRouter.get('/users', UserController.getAllUsers);

module.exports = UserRouter;
