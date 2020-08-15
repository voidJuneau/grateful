const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/api/signin', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        // const token = await user.generateAuthToken();
        // res.status(201).send({user, token});
        res.status(201).send({user});
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;