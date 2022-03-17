const categoriesServices = require('../services/categories');

const createCategoriesController = async (req, res) => {
        const { name } = req.body;

        const createdCategoryName = await categoriesServices
        .createCategoriesService(name);

        return res.status(201).json(createdCategoryName);
};

const getAllController = async (req, res) => {
        const categories = await categoriesServices.getAllService();
        
        return res.status(200).json(categories);
};

module.exports = { 
    createCategoriesController,
    getAllController,
};