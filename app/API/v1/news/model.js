const { Schema, Types, model } = require("mongoose");

const newsSchema = Schema({
  // userid: {
  //   type: Types.ObjectId,
  //   required: true,
  // },
  title: {
    type: String,
    minlength: [3, "title min 3 character"],
    required: [true, "title can not empty"],
  },
  content: {
    type: String,
    minlength: [10, "content min 10 character"],
    maxlength: [50, "content max 50 character"],
    default: "",
  },
  author: {
    type: String,
    maxlength: [20, "author max 20 character"],
    default: "",
  },
  category: {
    type: Types.ObjectId,
    ref: "Category",
    default: null,
  },
  image: {
    type: String,
    default: "",
  },
  source: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "draft",
    enum: ["draft", "review", "published"],
  },
});

module.exports = model("News", newsSchema);
