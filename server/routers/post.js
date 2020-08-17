const express = require('express');
const Post = require('../models/post')
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
        res.status(400).send({error: e.message});
    }
})

router.get('/api/post/all', async (req, res) => {
    // Post.find({$or:[{public: true}, {owner:req.user._id}]}, (err, posts) => {
    Post.find({public: true}, (err, posts) => {
        if (err) return res.send(err);
        res.send(posts)
    })
})

router.get('/api/post/mine', auth, async (req, res) => {

})

module.exports = router;