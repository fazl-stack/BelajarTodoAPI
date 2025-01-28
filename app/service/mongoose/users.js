const User = require("../../API/v1/users/model");
const { BadRequestError } = require("../../error");
const bcrypt = require("bcryptjs");
const { createToken } = require("../../utils");
const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../../utils/cloudinary");

const register = async (req) => {
  const { username, password, confirmPassword } = req.body;
  if (password !== confirmPassword) throw new BadRequestError("password beda");
  const user = await User.create({
    username,
    password: await bcrypt.hash(password, 12),
  });
  const token = createToken({ username: user.username, userid: user._id });
  return token;
};

const login = async (req) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) throw new BadRequestError("username blm terdaftar");
  const passwordCorrect = await bcrypt.compare(password, user.password);
  if (!passwordCorrect) throw new BadRequestError("password salah");

  const token = createToken({ username: user.username, userid: user._id });

  return token;
};

const updateUser = async (req) => {
  const { username } = req.body;

  if (req.file) {
    const file = await uploadToCloudinary(req.file.buffer);
    const result = await User.findOneAndUpdate(
      { _id: req.user.userid },
      { username, avatar: { path: file.public_id, url: file.secure_url } }
    );

    if (result.avatar.path)
      await deleteFromCloudinary(result.avatar.path, "image");
    return result;
  }

  const result = await User.findOneAndUpdate(
    { _id: req.user.userid },
    { username }
  );
  if (!result) throw new notFoundError("user not found");
  return result;
};

module.exports = {
  register,
  login,
  updateUser,
};
