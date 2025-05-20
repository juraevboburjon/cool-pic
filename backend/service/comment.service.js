const commentModel = require("../models/comment.model");

class commentService {
  async create(postId, author, text) {
    const comment = new commentModel({ postId, author, text });
    await comment.save();
    return comment;
  }

  async getById(postId) {
    return await commentModel.find({ postId }).sort({ createdAt: -1 });
  }
}

module.exports = new commentService();
