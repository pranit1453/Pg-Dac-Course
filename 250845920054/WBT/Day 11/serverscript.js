const http = require("http");
const https = require("https"); // Use https to fetch data from remote URLs
const { log } = require("console");
const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // Fetch the remote content from the external website
        https.get('https://ietpune.com/', (response) => {
            let data = '';

            // A chunk of data has been received.
            response.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received.
            response.on('end', () => {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            });
        }).on('error', (err) => {
            res.writeHead(500);  // Internal server error
            res.end("Error Loading Remote File!!!!");
        });
    } else {
        res.writeHead(404); // Not found
        res.end("Page Not Found!!!!");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
