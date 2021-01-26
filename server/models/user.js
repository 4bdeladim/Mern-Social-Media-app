const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
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
    todo: [Object]
});



module.exports = mongoose.model('User', UserSchema);