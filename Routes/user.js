const express = require('express')
const router = express.Router()

// Import Controllers
const {createUser, getAllUsers} = require('../Controllers/register')

// Routes
router.route('/').post(createUser).get(getAllUsers)

module.exports = router