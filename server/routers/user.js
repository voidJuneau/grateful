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

router.get('/me', auth, async (req, res) => {
    res.send(req.user)
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

router.get('/:id', async (req, res) => {
    // TODO: test
    let user = User.findById(req.params.id)
    if (user) {
        res.send(user)
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