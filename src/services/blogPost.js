const jwt = require('jsonwebtoken');
const { Category, User, BlogPosts } = require('../models');

const createBlogPostService = async (user, title, content, token) => {
    const { data } = jwt.verify(token, process.env.JWT_SECRET); 
    console.log(data);
    const dataPost = await BlogPosts.create({ userId: data, title, content });
  
    return dataPost;
};

const getAllBlogPostService = async () => { 
    const allPosts = await BlogPosts.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });

    return allPosts;
  };

module.exports = {
    createBlogPostService,
    getAllBlogPostService,
}; 