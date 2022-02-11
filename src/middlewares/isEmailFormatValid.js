const isEmailFormatValid = (req, res, next) => {
    const { email } = req.body;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // regex based on https://regexlib.com/Search.aspx?k=email&AspxAutoDetectCookieSupport=1
    const validateRegex = regexEmail.test(email);

    if (!validateRegex) {
        return res.status(400).json({
        message: '"email" must be a valid email',
});
}

    next();
};

module.exports = isEmailFormatValid;