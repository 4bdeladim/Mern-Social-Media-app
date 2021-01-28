const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    name: {
        type: String,
        required: true,
    },
    posts: [Object]
});



module.exports = mongoose.model('User', UserSchema);