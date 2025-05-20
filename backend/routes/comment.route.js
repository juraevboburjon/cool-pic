const express = require("express");
const commentController = require("../controllers/comment.controller");

const router = express.Router();

router.post("/create", commentController.create);
router.get("/post/:postId", commentController.getPostById);

module.exports = router;
