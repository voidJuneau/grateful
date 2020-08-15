const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 16,
        lowercase: true,
        trim: true
    }
    // ,
    // name: {
    //     type: String,
    //     required: true,
    //     minlength: 2,
    //     maxlength: 24, 
    //     trim: true
    // },
    // password: {
    //     type: String,
    //     required: true,
    //     minlength: 6
    // },
    // privateDefault: {
    //     type: Boolean,
    //     required: true
    // },
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
})

// userSchema.pre('save', async next => {
//     const user = this;
//     if (user.isModified('password') || user.isNew) {
//         user.password = await bcrypt.hash(user.password, 8);
//     }
//     next();
// })

// userSchema.methods.generateJWT = async () => {
//     const user = this;
//     const token = jwt.sign({
//         id: user._id,
//         username: user.username
//     }, process.env.JWT_SECRET);
//     user.tokens = user.tokens.concat({token});
//     await user.save();
//     return token;
// }

// userSchema.methods.generateAuthToken = async function() {
//     const user = this
//     const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)
//     user.tokens = user.tokens.concat({token})
//     await user.save()
//     return token
// }

// userSchema.statics.findByCredentials = async (username, password) => {
//     const user = await User.findOne({username});
//     if (!user) throw new Error('Unable to login.');
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) throw new Error('Unable to login.');
//     return user;
// }

const User = mongoose.model('User', userSchema);

module.exports = User;