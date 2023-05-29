const Exercise = require('../Models/Exercise')
const User = require('../Models/User')

const createExercise = async (req, res) => { 
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

const exerciseLogger = async (req, res) => { 
    const {from, to, limit} = req.query
    // get userID
    const userID = req.params._id
    // get user
    const user = await User.findById(userID)

    try {
        if(!user){
            res.send('User does Not Exist')
        } else {
            // create date filtering
            const dateObj = {}
            if(from){
                dateObj["$gte"] = new Date(from)
            }
            if(to){
                dateObj["$lte"] = new Date(to)
            }

            let filter = {
                user_id: userID
            }

            if (from || to){
                filter.date = dateObj
            }

            // get exercises
            const exercises = await Exercise.find(filter).limit(+limit ?? 500)

            const logArray = exercises.map(e => ({
                description: e.description,
                duration: e.duration,
                date: e.date.toDateString()
            }))

            const log = {
                username: user.username,
                count: exercises.length,
                _id: userID,
                log: logArray
            }

            res.json(log)
        }
    } catch (error) {
        console.log(error);
    }
 }

module.exports = {
    createExercise,
    exerciseLogger
}