const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 

    photo: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    location:{
        type:String,
    },
    upVotes:{
        type:Number,
        default: 0
    },
    isClean:{
        type: Boolean,
        default: false,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;