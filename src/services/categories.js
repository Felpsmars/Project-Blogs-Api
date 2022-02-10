const jwt = require('jsonwebtoken');
const { Category } = require('../models');

const createCategoriesService = async (name) => {
    const newCategoryName = await Category.create({ name });

    const token = jwt.sign({ data: newCategoryName.dataValues.id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
        algorithm: 'HS256',
    });
    
    return { 
        newCategoryName,
        token,
    };
};

module.exports = {
    createCategoriesService,
};