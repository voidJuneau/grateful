const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
        //TODO: bad word filter
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