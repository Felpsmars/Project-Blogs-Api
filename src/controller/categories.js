const categoriesServices = require('../services/categories');

const createCategoriesController = async (req, res) => {
    try {
        const { name } = req.body;

        const createdCategoryName = await categoriesServices
        .createCategoriesService(name);

        return res.status(201).json(createdCategoryName);
       } catch (error) {
        res.status(500).json({ message: error.message });
       }
};

const getAllController = async (req, res) => {
    try {
        const categories = await categoriesServices.getAllService();
        return res.status(200).json(categories);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = { 
    createCategoriesController,
    getAllController,
};