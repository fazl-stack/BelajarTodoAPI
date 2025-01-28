const { BadRequestError, UnauthenticatedError } = require("../error");
const { verifyToken } = require("../utils");

const authmiddleware = (req, res, next) => {
  try {
    let token;

    const authHeaders = req.headers.authorization;
    if (authHeaders && authHeaders.startsWith("Bearer")) {
      token = authHeaders.split(" ")[1];
    }

    if (!token) throw new UnauthenticatedError("autentikasi invalid");

    const payload = verifyToken(token);
    req.user = {
      username: payload.username,
      userid: payload.userid,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authmiddleware };
