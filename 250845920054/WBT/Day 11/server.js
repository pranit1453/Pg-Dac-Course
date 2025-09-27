

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    //req.url is the path requested by the client.
    //If the URL is / (the homepage/root), we handle it in a specific way
  if (req.url === '/') {
    //__dirname is a special variable in Node.js that gives the 
    // absolute path of the directory where the current script file lives.
    //It joins multiple path segments into one complete path string.
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading file');
        return;
      }
      /**
       * Sets the response header Content-Type to text/html
       *  so the browser knows it’s receiving HTML.
       */
      res.writeHead(200, { 'Content-Type': 'text/html' });
      /**
       * Sends the contents of the index.html file as the response body.
         Ends the response so the browser knows it’s the complete content.
       */
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


