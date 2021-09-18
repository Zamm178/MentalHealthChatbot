const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const replyRouter = require('./routes/reply-router')

// Run once
// require('./training-dataset/training-dataset')();

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', replyRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
