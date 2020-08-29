const express = require("express");
const Post = require("../models/post");
const auth = require("../middleware/auth");
const Task = require("../../../node/task-manager/src/models/task");
const router = express.Router();

router.post("/new", async (req, res) => {
  const post = new Post({
    ...req.body,
    // owner: req.user._id
  });
  try {
    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/one", async (req, res) => {
  let index;
  let post;
  while (!post) {
    index = Math.floor(Math.random() * 10);
    post = await Post.findOne({ public: true }, (err, post) => {
      if (err) return res.status(500).send(err);
    }).skip(index);
  }
  res.send(post);
});

router.get("/all", async (req, res) => {
  //(with auth) Post.find({$or:[{public: true}, {owner:req.user._id}]}, (err, posts) => {
  let posts = await Post.find({ public: true }, (err, posts) => {
    if (err) return res.status(500).send(err);
  }).sort({_id:-1}).limit(5).populate("owner");
  res.send(
    posts.map((post) => ({
      _id: post._id,
      content: post.content,
      owner_id: post.owner._id,
      ownerUserid: post.owner.userid,
      ownerName: post.owner.name,
      date: post._id.getTimestamp().toISOString().substring(0,10)
    }))
  );
});

router.get("/user/:uid", async (req, res) => {
  let posts = await Post.find({ owner: req.params.uid }, (err, posts) => {
    if (err) return res.status(500).send(err);
  }).sort({_id:-1}).limit(5).populate("owner");
  if (posts) {
    res.send(
      posts.map((post) => ({
        _id: post._id,
        content: post.content,
        owner_id: post.owner._id,
        ownerUserid: post.owner.userid,
        ownerName: post.owner.name,
        date: post._id.getTimestamp().toISOString().substring(0,10)
      }))
    );
  } else {
    res.status(400).send({ error: "no post of that user" });
  }
});

router.patch("/:pid", auth, async (req, res) => {
  let post = await Post.findById(req.params.pid);
  if (!post) return res.status(400).send({error: 'No post of the request.'});
  if (req.user._id != post.owner.toString()) return res.status(400).send({error: 'Cannot edit other\'s post.'});
  try{
    post.content = req.body.content;
    await post.save();
  } catch (err) {
    console.log(err.message)
    return res.status(400).send({error: err.message.split('content: ')[1]});
  }
  res.send(post);
});

router.delete("/:pid", auth, async (req, res) => {
  let post = await Post.findById(req.params.pid);
  if (!post) return res.status(400).send({error: 'No post of the request.'});
  if (req.user._id != post.owner.toString()) return res.status(400).send({error: 'Cannot delete other\'s post.'});
  await post.remove();
  res.send(post);
});

module.exports = router;
