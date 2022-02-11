const isCategoryIdOnBody = async (req, res, next) => {
    const { categoryIds } = req.body;
      if (!categoryIds) {
   return res.status(400).json({ message: '"categoryIds" is required' }); 
  }
      next();
    };

module.exports = isCategoryIdOnBody;