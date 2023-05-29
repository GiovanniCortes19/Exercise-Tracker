const Exercise = require('../Models/Exercise')
const User = require('../Models/User')

const createExercise = async (req, res) => { 
    // find the user
    const id = req.params._id
    const { description, duration, date } = req.body
    try {
        const user = await User.findById(id)
        if (!user) {
            res.send('User does not exist');
        } else {
            const exercise = await Exercise.create({
                user_id: user._id,
                description: description,
                duration: duration,
                date: date ? new Date(date) : new Date()
            })

            res.json({
                username: user.username,
                description: exercise.description,
                duration: exercise.duration,
                date: exercise.date.toDateString(),
                _id: id
            })
        }
    } catch (error) {
        console.log(error);
        res.send('Something went wrong creating the exercise')
    }
 }

module.exports = {
    createExercise
}