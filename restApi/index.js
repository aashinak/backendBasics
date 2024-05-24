import express from 'express'

const app = express()

const port = 3000
const localhost = "127.0.0.1"

app.get('/', (req, res) => {
    res.status(200).send("heu there!!!!")
})

app.listen(port, localhost, () => {
    console.log(`Server started at http://${localhost}:${port}/`); 
})