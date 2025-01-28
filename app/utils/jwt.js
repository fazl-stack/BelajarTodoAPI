const jwt = require("jsonwebtoken");
const { securitykey } = require("../config");
const createToken = (user) => {
  const token = jwt.sign(user, securitykey, {
    expiresIn: "7d",
  });
  return token;
};

const verifyToken = (token) => jwt.verify(token, securitykey);

module.exports = { createToken, verifyToken };
