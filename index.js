const express = require("express");
const http = require("http");
const app = express();

app.get("/", (req, res) => {
  console.log("nodejs server test");
  res.end("<h1>Hello world</h1>");
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("서버 실행 중 >>> http://localhost:3000");
});
