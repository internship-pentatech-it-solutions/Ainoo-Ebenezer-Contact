const  mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'please add a username'],
        trim: true,
    },
    email:{
        type: String,
        trim: true,
        required: [true, 'please add a email'],
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: [true, 'please add a password'],
        trim: true,
        minlenght: 8,
    }
});


module.exports = mongoose.model('users', userSchema);