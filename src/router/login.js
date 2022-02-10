const express = require('express');

const loginController = require('../controller/login');
const isEmailEmpty = require('../middlewares/isEmailEmpty');
const isEmailOnBody = require('../middlewares/isEmailOnBody');
const isPasswordOnBody = require('../middlewares/isPasswordOnBody');
const isPasswordEmpty = require('../middlewares/isPasswordEmpty');

const routes = express.Router();

routes.post('/',    
    isEmailEmpty,
    isPasswordEmpty,
    isEmailOnBody,
    isPasswordOnBody,
    loginController.login);

module.exports = routes;