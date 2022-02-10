const userService = require('../services/user');

const userController = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const token = await userService.createUserService(displayName, email, password, image);
        return res.status(201).json({ token });
       } catch (error) {
        res.status(500).json({ message: error.message });
       }
};

const getAllController = async (req, res) => {
    try {
        const users = await userService.getAllService();
        return res.status(200).json(users);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const findByPkController = async (req, res) => {
    try {
        const { id } = req.params;
        const findById = await userService.getByIdService(id);
        return res.status(200).json(findById);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = { 
    userController,
    getAllController,
    findByPkController,
};