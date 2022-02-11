const express = require('express');

const blogPost = require('../controller/blogPost');
const isCategoryIdOnBody = require('../middlewares/isCategoryIdOnBody');
const isContentOnBody = require('../middlewares/isContentOnBody');
const isTitleOnBody = require('../middlewares/isTitleOnBody');
const isCategoryExist = require('../middlewares/isCategoryExist');
const validatedToken = require('../middlewares/isTokenValid');

const routes = express.Router();

routes.post('/',
    validatedToken,
    isCategoryIdOnBody,
    isContentOnBody,
    isTitleOnBody,
    isCategoryExist,
    blogPost.createBlogPostController);

routes.get('/',
    validatedToken,
    blogPost.getAllBlogPostController);

module.exports = routes;