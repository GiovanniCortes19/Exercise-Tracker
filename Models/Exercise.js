const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    duration: {
        type: Number
    },
    date: {
        type: Date
    },
    user_id: {
        type: String,
        required: [true, "Please insert the user ID"]
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)