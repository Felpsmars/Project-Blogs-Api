const BlogPostsService = require('../services/blogPost');

const createBlogPostController = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { user } = req;
    const token = req.headers.authorization;

    const newPost = await BlogPostsService.createBlogPostService(user, title, content, token);

    return res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBlogPostController = async (_req, res) => {
  try {
    const allPosts = await BlogPostsService.getAllBlogPostService();
    
    return res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlogPostController,
  getAllBlogPostController,
}; 