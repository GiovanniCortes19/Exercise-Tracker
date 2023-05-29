const User = require('../Models/User')

const createUser = async (req, res) => { 
    try {
        const user = await User.create({...req.body})
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
    }
 }

const getAllUsers = async (req, res) => { 
    try {
        const users = await User.find({}).select('username _id')
        if(users.length === 0){
            res.send('No users found')
        } else {
            res.status(200).send(users)
        }
    } catch (error) {
        console.log(error);
        res.send('Something went wrong')
    }
 }

module.exports = {
    createUser,
    getAllUsers
}