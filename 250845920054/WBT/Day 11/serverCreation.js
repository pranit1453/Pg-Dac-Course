const http = require("http")
const fs = require("fs")
const path = require("path")
const { log } = require("console")
const PORT = 3000

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join("", "index2.html"), (err, data) => {
            if (err) {
                res.writeHead(500)  //for internal server error
                res.end("Error Loading File!!!!!!")
                return
            }
            res.writeHead(200, { "content-type": "text/html" })  // for plain test we use text/html
            res.end(data)
        })
    } else {
        res.writeHead(404)
        res.end("Page Not Found!!!!")
    }
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);

})


      //  if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
           // reject('Both inputs must be valid numbers');