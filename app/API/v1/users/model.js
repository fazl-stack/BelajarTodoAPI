const { Schema, model, Types } = require("mongoose");

const usersSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "username already exist"],
    minlength: [5, "username min 5 character"],
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "password min 5 character"],
  },
  avatar: {
    path: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
});

module.exports = model("User", usersSchema);
