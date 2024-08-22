let http = require("http")
let hostname = "127.0.0.1"
const port = 3000


;
let server = http.createServer((req, res) =>{
    if (req.url == "/"){
        res.statusCode = 200
        res.setHeader("content-type", "texts/plain")
        res.end("Hello protein shake")
    }else  if (req.url == "/shake"){
        res.statusCode = 200
        res.setHeader("content-type", "texts/plain")
        res.end("Hello protein shake")
    }else{
        res.statusCode = 404
        res.setHeader("content-type", "texts/plain")``  +2aq
        res.end("404, not found")
}
})

server.listen(port, hostname, () =>{
    console.log(`server is listening at http://${hostname}:${port}`);
    
})