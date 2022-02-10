require('dotenv').config();
const jwt = require('jsonwebtoken');

const validatedToken = async (req, res, next) => { // função baseado na função kauan carvalho https://github.com/tryber/sd-014-b-project-blogs-api/pull/51/files
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validatedToken; 