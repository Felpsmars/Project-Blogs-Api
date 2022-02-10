const jwt = require('jsonwebtoken');
const { User } = require('../models');

const findLoginService = async (email) => {
    const newLogin = await User.findOne({ 
        where: { email },
    });

    if (newLogin === null) {
        throw new Error('Invalid fields');
      }

    const token = jwt.sign({ data: newLogin.dataValues.id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
        algorithm: 'HS256',
      });

    return token;
};

module.exports = {
    findLoginService,
};