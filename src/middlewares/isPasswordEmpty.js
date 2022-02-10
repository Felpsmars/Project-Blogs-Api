const isPasswordEmpty = (req, res, next) => {
    const { password } = req.body;

    if (password === '') {
        return res.status(400).json({
            message: '"password" is not allowed to be empty',
        });
    }

    next();
};

module.exports = isPasswordEmpty;
