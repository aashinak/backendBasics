import express from 'express'
import urlRoute from './routes/url.js'
import connectToMongoDb from './connection.js'
import { handleRedirectRequest } from './controllers/url.js'

const app = express()
app.use(express.json())

// connect to mongo
connectToMongoDb("mongodb://127.0.0.1:27017/short-url")

// url route
app.use('/url', urlRoute)
app.get('/:shortId', handleRedirectRequest)

// server running
const port = 3000
const localhost = "127.0.0.1"
app.listen(port,
    () => {
        console.log(`Server started at http://${localhost}:${port}`);
    })