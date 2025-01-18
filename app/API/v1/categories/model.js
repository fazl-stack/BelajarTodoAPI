const { Schema, model, Types } = require("mongoose");

const categorySchema = Schema(
  {
    // userid: {
    //   type: Types.ObjectId,
    //   required: true,
    // },
    name: {
      type: String,
      minlength: [3, "name category min 3 characters"],
      required: [true, "name cannot empty"],
    },
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
