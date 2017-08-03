// Main starting point of the application
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const router = require('./router')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const cors = require('cors')

// DB Setup
mongoose.connect('mongodb://localhost/favors')

// App Setup
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
app.use(expressValidator())
router(app)

// Server Setup
const port = 3001
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)
