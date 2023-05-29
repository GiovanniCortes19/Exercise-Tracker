// IMPORTS
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongodb = require('mongodb')
const mongoose = require('mongoose')


// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// HOME WEBPAGE
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


// ROUTERS
const usersRouter = require('./Routes/user')
const exerciseRouter = require('./Routes/exercise')

// ROUTES
app.use('/api/users',usersRouter)
app.use('/api/users', exerciseRouter)


const port = process.env.PORT || 3000

// START & CONNECT APP TO DATABASE
const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(port, () => {
      console.log(`Your app is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error);
  }
}

start()