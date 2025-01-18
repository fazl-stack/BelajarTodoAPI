const pengguna = require("../../API/v1/Revisi Ujian/model");
const { BadRequestError } = require("../../error");
const bcrypt = require("bcryptjs");

const register = async (req) => {
  const { name, password, confirmPassword } = req.body;
  if (password !== confirmPassword)
    throw new BadRequestError("password tidak sama");
  const result = await pengguna.create({
    name,
    password: await bcrypt.hash(password, 5),
  });
  return result;
};

const login = async (req) => {
  const { name, password } = req.body;
  const user = await pengguna.findOne({ name });
  if (!user) throw new BadRequestError("pengguna belum didaftarkan");
  const passwordCorrect = await bcrypt.compare(password, user.password);
  if (!passwordCorrect) throw new BadRequestError("password salah");

  return user;
};

const changePassword = async (req) => {
  const { id } = req.params;
  const { oldPassword, newPassword, confirmNewPassword } = req.body;
  const result = await pengguna.findOne({ _id: id });

  const comparePassword = await bcrypt.compare(oldPassword, result?.password);
  console.log("compare password", comparePassword);
  if (comparePassword) {
    const updatedUser = await pengguna.findOneAndUpdate(
      { _id: id },
      { password: await bcrypt.hash(newPassword, 5) },
      { new: true }
    );

    if (!updatedUser) {
      throw new BadRequestError("Update password gagal");
    }

    return updatedUser;
  } else {
    throw new BadRequestError("Password lama tidak sesuai");
  }
};

module.exports = {
  register,
  login,
  changePassword,
};
