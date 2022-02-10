const jwt = require('jsonwebtoken');
const { User } = require('../models');

const createUserService = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });

    const token = jwt.sign({ data: newUser.dataValues.id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
        algorithm: 'HS256',
      });

    return token;
};

const getAllService = async () => {
    const allUsers = await User.findAll();
    return allUsers;
};

const getByIdService = async (id) => {
    const user = await User.findByPk(id);

    if (user === null) {
    throw new Error('User does not exist');
    }

    return user;
};

module.exports = {
    createUserService,
    getAllService,
    getByIdService,
};