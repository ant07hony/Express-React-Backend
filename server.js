// -------------DEPENDENCIES---------------
// initialize .env variables
require("dotenv").config()
// start the mongoose db connection
require('./config/db.connection.js')
// import express
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const peopleRouter = require('./routes/people-router')


// --------------CONFIGURATION---------------
// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env

// create application object
const app = express()

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())
app.use(morgan("dev"))

// ROUTER MIDDLEWARE
app.use('/people', peopleRouter)


//---------------ROUTES----------------------
// create a test route
app.get("/", (req, res)=>{
    res.send("Hello World")
})

// --------------LISTENER--------------------
app.listen(PORT, ()=> console.log(`listening on PORT ${PORT}`))
