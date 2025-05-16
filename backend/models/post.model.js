const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, maxLength: 500 },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
