const commentService = require("../service/comment.service");

class PostController {
  async create(req, res) {
    const { postId, author, text } = req.body;

    if (!postId || !author || !text) {
      return res.status(400).json(error);
    }

    try {
      const comment = await commentService.create(postId, author, text);
      res.status(200).json({ message: "somment posted", comment });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getPostById(req, res) {
    const { postId } = req.params;

    try {
      const comments = await commentService.getById(postId);
      res.status(201).json(comments);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new PostController();
