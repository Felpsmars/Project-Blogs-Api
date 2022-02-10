const express = require('express');

const categories = require('../controller/categories');
const isNameBlank = require('../middlewares/isNameBlank');
const validatedToken = require('../middlewares/isTokenValid');

const routes = express.Router();

routes.post('/', 
    validatedToken,
    isNameBlank, 
    categories.createCategoriesController);

module.exports = routes;