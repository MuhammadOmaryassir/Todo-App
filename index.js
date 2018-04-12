const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const db = mongoose.connect('mongodb://localhost/Name of the DB') // ToDo

const TodoApp = require('./models/TodoModel') // import the TodoApp Schema
const app = express()

const port = process.env.PORT || 3000 // port number

// using body parser middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// home page
app.get('/', function (req, res) {
  res.send('Welcome to our API')
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  }
  console.log('running on port: ' + port)
})
