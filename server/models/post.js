const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    contents: {
        type: String,
        required: true,
        trim: true
    },
    public: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {timestamp: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;