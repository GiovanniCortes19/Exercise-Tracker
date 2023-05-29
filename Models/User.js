const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please give a username']
    }
})

module.exports = mongoose.model('User', UserSchema)