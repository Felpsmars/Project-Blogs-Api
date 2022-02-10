const isEmailEmpty = (req, res, next) => {
    const { email } = req.body;

    if (email === '') {
        return res.status(400).json({
            message: '"email" is not allowed to be empty',
        });
    }

    next();
};

module.exports = isEmailEmpty;
