const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.token;
  try {
    const data = jwt.verify(token, "Secret_KEY");
    req.body.author = data.userID;
    next()
  } catch (error) {
    return res.status(400).send("Invalid Token!");
  }
};

module.exports = authMiddleware;
