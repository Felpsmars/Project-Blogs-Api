const isDisplayNameOnBody = (req, res, next) => {
    const { displayName } = req.body;
    
    if (!displayName) {
        return res.status(400).json({
            message: '"displayName" is required',
    }); 
}
    next();
};

module.exports = isDisplayNameOnBody;