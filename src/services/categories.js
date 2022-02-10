const { Category } = require('../models');

const createCategoriesService = async (name) => {
    const newCategoryName = await Category.create({ name });

    return newCategoryName;
};

const getAllService = async () => {
    console.log('Linha 10');
    const allCategories = await Category.findAll();
    console.log(allCategories);
    return allCategories;
};

module.exports = {
    createCategoriesService,
    getAllService,
};