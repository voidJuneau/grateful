const express = require('express');
const Post = require('../models/post')
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/api/post/new', auth, async (req, res) => {

})

router.get('/api/post/all', async (req, res) => {

})

router.get('/api/post/mine', auth, async (req, res) => {

})

module.exports = router;