const User = require("../../API/v1/users/model");
const { BadRequestError } = require("../../error");
const bcrypt = require("bcryptjs");

const register = async (req) => {
  const { username, password, confirmPassword } = req.body;
  if (password !== confirmPassword) throw new BadRequestError("password beda");
  const result = await User.create({
    username,
    password: await bcrypt.hash(password, 12),
  });

  return result;
};

const login = async (req) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) throw new BadRequestError("username blm terdaftar");
  const passwordCorrect = await bcrypt.compare(password, user.password);
  if (!passwordCorrect) throw new BadRequestError("password salah");

  return user;
};

module.exports = {
  register,
  login,
};
