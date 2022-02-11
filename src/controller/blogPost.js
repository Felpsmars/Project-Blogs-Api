const BlogPostsService = require('../services/blogPost');

const createBlogPostController = async (req, res) => {
    const { title, content } = req.body;
    const { user } = req;
    const token = req.headers.authorization;

    const newPost = await BlogPostsService.createBlogPostService(user, title, content, token);

    return res.status(201).json(newPost);
};

module.exports = {
  createBlogPostController,
}; 