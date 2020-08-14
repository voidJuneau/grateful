const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
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
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

})