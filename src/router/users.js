const express = require('express');

const isDisplayNameLengthValid = require('../middlewares/isDisplayNameLengthValid');
const isDisplayNameOnBody = require('../middlewares/isDisplayNameOnBody');
const isEmailFormatValid = require('../middlewares/isEmailFormatValid');
const isEmailOnBody = require('../middlewares/isEmailOnBody');
const isPasswordLengthValid = require('../middlewares/isPasswordLengthValid');
const isPasswordOnBody = require('../middlewares/isPasswordOnBody');
const isEmailAlreadyExist = require('../middlewares/isEmailAlreadyExist');
const validatedToken = require('../middlewares/isTokenValid');

const UserController = require('../controller/user');

const routes = express.Router();

routes.post(
  '/',
  isDisplayNameOnBody,
  isDisplayNameLengthValid,
  isEmailOnBody,
  isEmailFormatValid,
  isPasswordOnBody,
  isPasswordLengthValid,
  isEmailAlreadyExist,
  UserController.userController,
);

routes.get('/', validatedToken, UserController.getAllController);

routes.get('/:id', validatedToken, UserController.findByPkController);

module.exports = routes;
