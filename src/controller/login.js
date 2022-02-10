const loginService = require('../services/login');

const login = async (req, res) => {
    try {
        const { email } = req.body;

        const token = await loginService.findLoginService(email);

        return res.status(200).json({ token });
       } catch (error) {
        res.status(400).json({ message: error.message });
       }
};

module.exports = { login };