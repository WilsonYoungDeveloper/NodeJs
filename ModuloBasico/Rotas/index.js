const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
  res.send("Minha página sobre");
});

app.get("/blog", function (req, res) {
  res.send("Bem-vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo", function (req, res) {
  res.send("Olá " + req.params.nome + " seu cargo é " + req.params.cargo);
});

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});
