const isEmailOnBody = (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            message: '"email" is required',
        });
    }
    next();
};

module.exports = isEmailOnBody;