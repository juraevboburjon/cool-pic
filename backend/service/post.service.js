const postModel = require("../models/post.model");

class postService {
  async create(post) {
    const newPost = await postModel.create(post);
    return newPost;
  }

  async getAll() {
    const allPosts = await postModel.find();
    return allPosts;
  }

  async getById(id) {
    const onePost = await postModel.findById(id);

    if (!onePost) {
      throw new Error("Post not found");
    }

    return onePost;
  }

  async editPost(post, id) {
    if (!id) {
      throw new Error("Id not found...");
    }

    const editedPost = await postModel.findByIdAndUpdate(id, post, {
      new: true,
    });
    return editedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("Id not found...");
    }

    const deletedPost = await postModel.findByIdAndDelete(id);
    return deletedPost;
  }
}

module.exports = new postService();
