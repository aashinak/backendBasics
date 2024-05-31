import express from 'express'
import urlRoute from './routes/url.js'
import connectToMongoDb from './connection.js'
import { handleRedirectRequest } from './controllers/url.js'
import path from 'path'
import URL from './models/url.js'
import staticRoute from './routes/staticRouter.js'
import userRoute from './routes/user.js'
import cookieParser from 'cookie-parser'
import {checkAuth, restrictToLoggedinUserOnly} from './middlewares/auth.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

// connect to mongo
connectToMongoDb("mongodb://127.0.0.1:27017/short-url")



// url route
app.use('/url', restrictToLoggedinUserOnly, urlRoute) 
app.use('/user', userRoute)
app.use('/', checkAuth, staticRoute)
app.get('/redi/:shortId', handleRedirectRequest)

// server running
const port = 3000
const localhost = "127.0.0.1"
app.listen(port,
    () => {
        console.log(`Server started at http://${localhost}:${port}`);
    })