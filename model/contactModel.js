const  mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
    },
    mobile:{
        type: String,
        trim: true,
    },
    description:{
        type: String,
        trim: true,
    },
    blocked:{
        type: Boolean
    },
    liked:{
        type: Boolean
    }
});


module.exports = mongoose.model('contacts', contactSchema);