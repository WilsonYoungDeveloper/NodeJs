var http = require("http");

http
  .createServer(function (req, res) {
    res.end("Hello world! Welcome to my web site!");
  })
  .listen(8081);

console.log("O servidor rodando!");
