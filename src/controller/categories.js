const categoriesServices = require('../services/categories');

const createCategoriesController = async (req, res) => {
    try {
        const { name } = req.body;

        const createdCategoryName = await categoriesServices
        .createCategoriesService(name);

        return res.status(201).json(createdCategoryName.newCategoryName);
       } catch (error) {
        res.status(500).json({ message: error.message });
       }
};

module.exports = { 
    createCategoriesController,
};