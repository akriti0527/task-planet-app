const express = require("express");
const Post = require("../models/post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const post = await Post.create({
    user: req.user.id,
    content: req.body.content,
  });
  res.json(post);
});

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post("/like/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user.username)) {
    post.likes.push(req.user.username);
    await post.save();
  }
  res.json(post);
});

router.post("/comment/:id", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.comments.push({
    user: req.user.username,
    text: req.body.text,
  });
  await post.save();
  res.json(post);
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // 🔐 Allow only owner to delete
    if (post.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.deleteOne();

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }});

module.exports = router;
