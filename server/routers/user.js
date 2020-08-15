const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/api/signin', async (req, res) => {
    const user = new User(req.body)
    console.log('?')
    try {
        await user.save();
        // const token = await user.generateJWP();
        res.status(201).send({user});
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;