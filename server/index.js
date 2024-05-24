import http from 'http'
import fs from 'fs'
import url from 'url'

const port = 3000
const host = "127.0.0.1"

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end()
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    
    const log = `${Date.now()}: ${req.method} ${req.url} request recieved\n`
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    console.log("New request recieved");

    fs.appendFile("./log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': res.end("hello from home server!!!")
            break;
            case '/login': 
                const user = myUrl.query.name
                res.end(`You logged in ${user} !!!`)
            break;
            default: res.end("404 not found")
                break;
        }
    })
})


myServer.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})