const { Category } = require('../models');

const createCategoriesService = async (name) => {
    const newCategoryName = await Category.create({ name });

    return newCategoryName;
};

const getAllService = async () => {
    const allCategories = await Category.findAll();

    return allCategories;
};

module.exports = {
    createCategoriesService,
    getAllService,
};
