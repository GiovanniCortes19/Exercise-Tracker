const express = require('express')
const router = express.Router()

// Import Controllers
const { createExercise, exerciseLogger } = require('../Controllers/exercises')

// Routes
router.route('/:_id/exercises').post(createExercise)
router.route('/:_id/logs').get(exerciseLogger)

module.exports = router