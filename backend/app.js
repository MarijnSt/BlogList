const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/posts')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

console.log('Connecting to db...')

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to db!')
    })
    .catch((err) => {
        console.log('Error connecting to db: ', err.message)
    })

app.use(cors())
// app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app