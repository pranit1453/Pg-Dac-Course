const http = require('http')
const PORT=8080

http.createServer((req,res)=>{
   
   if (req.method==='GET') {
        res.writeHead(200)
        res.end(`Data is Served to server through ${req.method} method`)
   }
}).listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})