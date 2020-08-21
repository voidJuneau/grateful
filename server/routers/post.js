const express = require('express');
const Post = require('../models/post');
const auth = require('../middleware/auth');
const Task = require('../../../node/task-manager/src/models/task');
const router = express.Router();

router.post('/api/post/new', auth, async (req, res) => {
    const post = new Post({
        ...req.body,
        owner: req.user._id
    });
    try {
        await post.save();
        res.status(201).send(post);
    } catch(e) {
        res.status(400).send(e);
    }
})

router.get('/api/post/one', async (req, res) => {
    // TODO: random
    Post.findOne({public: true}, async (err, post) => {
        if (err) return res.status(500).send(err);
        res.send(post);
    })
})

router.get('/api/post/all', async (req, res) => {
    //(with auth) Post.find({$or:[{public: true}, {owner:req.user._id}]}, (err, posts) => {
    Post.find({public: true}, (err, posts) => {
        if (err) return res.status(500).send(err);
        res.send(posts);
    })
})

router.get('/api/post/mine', auth, async (req, res) => {
    Post.find({owner: req.user._id}, (err, posts) => {
        if (err) return res.status(500).send(err);
        res.send(posts);
    })
})

router.get('api/post/:id', async (req, res) => {
    // TODO: test
    let post = User.findById(req.params.id)
    if (post) {
        res.send(post)
    } else {
        res.status(400).send({error: "user not found"})
    }
})

router.patch('api/post/:id', auth, async (req, res) => {
    // TODO : body
})

module.exports = router;