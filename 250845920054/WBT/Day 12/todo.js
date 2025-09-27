const http = require('http')
const url = require('url')
const PORT = 3000;
const todos = [
    { id: 1, task: 'Learn JavaScript', completed: 'INPROGRESS' },
    { id: 2, task: 'Build a REST API', completed: 'INPROGRESS' },
    { id: 3, task: 'Write tests', completed: true },
];
const server = http.createServer((req, res) => {
    const { method, url } = req
    const parsedUrl = new URL(url, `http://${req.headers.host}`)   //URL-->containing the path and possibly query parameters from the HTTP request
    //req.headers.host---->contains the hostname (and optionally port) of the server receiving the request
    //new URL(url, base)
    console.log(parsedUrl);

    const pathname = parsedUrl.pathname
    /*
        pathname extracts just the path part of the URL from parsedUrl.

        The pathname is the part of the URL that comes after the domain and before any query parameters or hashes.

        For example, if the full URL is http://example.com/api/data?user=123, then pathname would be '/api/data
     */
    console.log(pathname);

    if (method == 'GET' && pathname == '/todos') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify(todos))

    }
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

})


