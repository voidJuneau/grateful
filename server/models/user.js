const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 16,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 24, 
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    privateDefault: {
        type: Boolean,
        required: true
    }
    // ,
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
})

userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

// userSchema.methods.generateAuthToken = async function() {
//     const user = this;
//     const token = jwt.sign({_id: user._id}, process.env.JWT_KEY);
//     user.tokens = user.tokens.concat({token});
//     await user.save()
//     return token;
// }

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({username});
    if (!user) throw new Error('Unable to login.');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Unable to login.');
    return user;
}

const User = mongoose.model('User', userSchema);

module.exports = User;