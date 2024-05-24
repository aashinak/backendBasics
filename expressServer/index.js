import express from 'express'

const port = 3000
const host = "127.0.0.1"
const app = express()

app.get("/", (req, res) => {
    console.log(req.body);
    res.send("Hey express")
})

app.listen(port, host,() => console.log(`Server running at http://${host}:${port}/`))
