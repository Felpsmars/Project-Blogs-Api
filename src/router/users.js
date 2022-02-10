const express = require('express');
const UserController = require('../controller/user');
const isDisplayNameLengthValid = require('../middlewares/isDisplayNameLengthValid');
const isDisplayNameOnBody = require('../middlewares/isDisplayNameOnBody');

const routes = express.Router();

routes.post('/',
    isDisplayNameOnBody,
    isDisplayNameLengthValid,
    UserController.createController);

module.exports = routes;