const BlogPostsService = require('../services/blogPost');

const createBlogPostController = async (req, res) => {
    const { title, content } = req.body;
    const token = req.headers.authorization;

    const newPost = await BlogPostsService.createBlogPostService(title, content, token);

    return res.status(201).json(newPost);
};

const getAllBlogPostController = async (_req, res) => {
    const allPosts = await BlogPostsService.getAllBlogPostService();
    
    return res.status(200).json(allPosts);
};

module.exports = {
  createBlogPostController,
  getAllBlogPostController,
}; 