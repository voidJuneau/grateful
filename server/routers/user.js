const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/signin', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user, token});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
})  

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.userid, req.body.password);
        const token = await user.generateAuthToken();
        res.send({user, token});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
})

router.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token != req.token);
        await req.user.save();
        req.send();
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/:userid', async (req, res) => {
    const user = await User.findOne({userid: req.params.userid}).populate('posts')
    if (user) {
        const posts = user.posts.map((post) => ({
            _id: post._id,
            content: post.content,
            owner_id: user._id,
            ownerUserid: user.userid,
            ownerName: user.name,
            date: post._id.getTimestamp().toISOString().substring(0,10)
          }))
        res.send({user, posts})
    } else {
        res.status(400).send({error: "user not found"})
    }
})

router.patch('/:id', auth, async (req, res) => {
    if (req.params.id !== req.user._id) return res.status(400).send();
    // TODO : body
})

router.get('/', (req, res) => {
    res.send({message: 'user default'})
})

module.exports = router;