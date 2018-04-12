const express = require('express')
const bodyParser = require('body-parser')
const {DataBase} = require('./models/conection')

const db = DataBase()

const app = express()

const port = process.env.PORT || 3000 // port number

// using body parser middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let TodoRouter = require('./Routes/TodoRoutes')(db)

app.use('/api/todos', TodoRouter)

// home page
app.get('/', function (req, res) {
  res.send('Welcome to our API')
})

app.listen(port)
