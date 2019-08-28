const config = require('./utils/config')
    , express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , cors = require('cors')
    , blogRouter = require('./controllers/posts')
    , middleware = require('./utils/middleware')
    , mongoose = require('mongoose')

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