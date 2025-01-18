const { StatusCodes } = require("http-status-codes");
const {
  register,
  login,
  changePassword,
} = require("../../../service/mongoose/revisi");

const signUp = async (req, res, next) => {
  try {
    const user = await register(req);
    res.status(StatusCodes.CREATED).json({ status: "success", user });
  } catch (error) {
    next(error);
  }
};
const signIn = async (req, res, next) => {
  try {
    const user = await login(req);
    res.status(StatusCodes.OK).json({ status: "success", user });
  } catch (error) {
    next(error);
  }
};

const passwordChanging = async (req, res, next) => {
  try {
    const updateUser = await changePassword(req);
    res
      .status(StatusCodes.CREATED)
      .json({
        status: "succes",
        message: "password sukses diganti",
        user: updateUser,
      });
  } catch (error) {
    next(error);
  }
};

module.exports = { signUp, signIn, passwordChanging };
