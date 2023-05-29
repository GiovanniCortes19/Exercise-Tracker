const express = require('express')
const router = express.Router()

// Import Controllers
const { createExercise } = require('../Controllers/exercises')

// Routes
router.route('/exercises').post(createExercise)

module.exports = router