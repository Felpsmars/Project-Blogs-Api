const jwt = require('jsonwebtoken');
const { BlogPosts } = require('../models');

const createBlogPostService = async (user, title, content, token) => {
    const { data } = jwt.verify(token, process.env.JWT_SECRET); 
    console.log(data);
    const dataPost = await BlogPosts.create({ userId: data, title, content });
  
    return dataPost;
};

module.exports = {
    createBlogPostService,
}; 