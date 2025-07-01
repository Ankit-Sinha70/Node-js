const http = require('http');
http.createServer((req, res) => {
    res.write("<h1>Hello This is AR</h1>")
    res.end("Welcome to my server");
}).listen(4000)