const { model, Schema } = require("mongoose");

const commentSchema = new Schema(
  {
    postId: { type: String, required: true },
    author: { type: String, required: true },
    text: { type: String, maxLength: 500 },
  },
  { timestamps: true }
);

module.exports = model("Comment", commentSchema);
