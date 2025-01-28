const { Schema, model, Types } = require("mongoose");

const todoSchema = Schema(
  {
    userid: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
      default: null,
    },
    title: {
      type: String,
      minlength: [3, "title min 3 character"],
      maxlength: [20, "title max 15 character"],
      required: [true, "title can not empty"],
    },
    desc: {
      type: String,
      minlength: [25, "description min 25 character"],
      default: "",
    },
    priority: {
      type: Number,
      default: 1,
      enum: [1, 2, 3],
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("Todo", todoSchema);
