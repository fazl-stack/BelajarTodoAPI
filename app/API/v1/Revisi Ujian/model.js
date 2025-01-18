const { Schema, Types, model } = require("mongoose");

const penggunaSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: [true, "nama sudah dipakai"],
    minlength: [3, "minimal 3 karakter"],
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "minimal 5 karakter"],
  },
});

module.exports = model("pengguna", penggunaSchema);
