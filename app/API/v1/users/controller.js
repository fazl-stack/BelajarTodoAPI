const { StatusCodes } = require("http-status-codes");
const {
  register,
  login,
  updateUser,
} = require("../../../service/mongoose/users");

const signUp = async (req, res, next) => {
  try {
    const token = await register(req);
    res.status(StatusCodes.CREATED).json({ status: "success", token });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const token = await login(req);
    res.status(StatusCodes.OK).json({ status: "success", token });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    await updateUser(req);
    res
      .status(StatusCodes.OK)
      .json({ status: "success", message: "update user successfully" });
  } catch (error) {
    next(error);
  }
};
module.exports = { signUp, signIn, update };
