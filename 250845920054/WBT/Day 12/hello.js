const http = require('http')
const url = require('url')
const PORT = 8080
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query

    const fName = query.fName || 'Pranit & Prathamesh...........';
    //const lName = query.lName || '';

    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(`<h1> Hello ${fName}</h1>`)
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

})















































// const http = require('http');

// const server1 = http.createServer((req, res) => {
//   const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  

//   console.log(reqUrl.pathname); 
  

//   const fName = reqUrl.searchParams.get('fName') || 'Testing!!!';

//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(`<h1>Hello ${fName}</h1>`);
// });

// server1.listen(3000);




