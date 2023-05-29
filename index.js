// IMPORTS
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongodb = require('mongodb')
const mongoose = require('mongoose')

// CONNECTING DATABASE


// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// HOME WEBPAGE
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// ROUTES



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
