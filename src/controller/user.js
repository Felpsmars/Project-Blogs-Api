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

module.exports = { userController };