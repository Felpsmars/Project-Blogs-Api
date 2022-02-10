const isDisplayNameLengthValid = (req, res, next) => {
    const { displayName } = req.body;
    console.log(displayName.length);
    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
    }); 
}
    next();
};

module.exports = isDisplayNameLengthValid;