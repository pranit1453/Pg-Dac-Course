const http=require('http');
const server = http.createServer((req,res) => {
    res.writeHead
    (200,{'content-type':'text/html'});
    res.end('Server Created using Node JS');
});
server.listen(8080);