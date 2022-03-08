// Writing Hello World with Node.js & Express

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") res.end("Hello World");
});

server.listen(3000);
