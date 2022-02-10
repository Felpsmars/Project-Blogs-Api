const { User } = require('../models');

const isEmailAlreadyExist = async (req, res, next) => {
    const { email } = req.body;
    const alreadyExist = await User.findOne({ where: { email } });

    if (!alreadyExist) {
        return next();
    }

    return res.status(409).json({ 
        message: 'user already registered',
    });
};

module.exports = isEmailAlreadyExist;