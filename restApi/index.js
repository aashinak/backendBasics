import express from 'express'
import userRouter from './routes/user.js'
import connectMongoDb from './connection.js'
import logReqRes from './middleware/index.js'

const app = express()


//connection
connectMongoDb("mongodb://127.0.0.1:27017/app-1") 

//middleware
app.use(logReqRes('log.txt'))
app.use(express.json())

// routes
app.use('/api/user', userRouter) 



const port = 3000
const localhost = "127.0.0.1"

app.listen(port, localhost, () => {
    console.log(`Server started at http://${localhost}:${port}/`); 
})