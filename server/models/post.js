const mongoose = require('mongoose');
const Filter = require('bad-words');

const filter = new Filter();

const postSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        validate(txt) {
            if (filter.isProfane(txt)) throw new Error('You cannot use bad words.');
        }
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