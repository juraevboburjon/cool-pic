const express = require("express");
const postController = require("../controllers/post.controller");
const upload = require("../helpers/multer.config");

const router = express.Router();

router.post("/create", upload.single("image"), postController.create);
router.get("/getAll", postController.getAll);
router.get("/get/:id", postController.getById);
router.put("/edit/:id", postController.editPost);
router.delete("/delete/:id", postController.delete);

module.exports = router;
