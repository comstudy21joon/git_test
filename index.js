const express = require("express");
const http = require("http");
const app = express();

app.get("/", (req, res) => {
  console.log("nodejs server test");
  res.end("<h1>Hello world</h1>");
});

app.get("/car/list", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h2>자동차 목록</h2>");
  res.end();
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("서버 실행 중 >>> http://localhost:3000");
});
