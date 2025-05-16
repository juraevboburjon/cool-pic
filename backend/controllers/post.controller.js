const postService = require("../service/post.service");

class PostController {
  async create(req, res) {
    try {
      const post = await postService.create(req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const allPost = await postService.getAll();
      res.status(200).json(allPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const onePost = await postService.getById(req.params.id);
      res.status(200).json(onePost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async editPost(req, res) {
    try {
      const { params, body } = req;
      const post = await postService.editPost(body, params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const post = await postService.delete(req.params.id);
      res.status(200).json({ message: `Post successfuly deleted ${post._id}` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PostController();
