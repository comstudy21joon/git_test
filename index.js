const express = require("express");
const http = require("http");
const app = express();

app.get("/", (req, res) => {
  console.log("nodejs server test");
  res.end("<h1>Hello world</h1>");
});

app.get("/car/input", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h2>자동차 정보 입력</h2>");
});

app.get("/car/list", (req, res) => {
  console.log("GET - /car/list 호출");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write("<h2>자동차 목록</h2>");
  res.end();
});

// 1. 원격 저장소의 내용 임의 수정
// 2. 지역 저장소의 내용 수정
// 한번에 push가 안된다.
// 3. fetch를 이용한 변경 이력 가져오기
// 4. 원격 브랜치와 지역 브랜치 병합
// 5. 지역 브랜치 커밋 후 push

// 새로운 내용

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("서버 실행 중 >>> http://localhost:3000");
});
