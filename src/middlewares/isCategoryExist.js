const { Category } = require('../models');

const isCategoryIdOnBody = async (req, res, next) => { // consultei https://github.com/tryber/sd-014-b-project-blogs-api/pull/59/files
    const { categoryIds } = req.body;
    const categories = await Category.findAll({ where: { id: categoryIds } });

    if (categories.length !== categoryIds.length) {
        return res.status(400).json({ message: '"categoryIds" not found' });
      }
      next();
    };

module.exports = isCategoryIdOnBody;