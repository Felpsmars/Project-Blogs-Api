const { User } = require('../models');

const createService = async ({ displayName, email, password, image }) => {
    const newUser = await User.create({ displayName, email, password, image });

    return newUser;
};

module.exports = {
    createService,
};