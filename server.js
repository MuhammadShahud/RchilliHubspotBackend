require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json({limit: '50mb'}))


const routes = require('./routes')
app.use('/elastech', routes)

app.listen(process.env.PORT, () => console.log('Server Started'))