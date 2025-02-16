const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
//   res.end("Hello World");
  const log = `${Date.now()} : ${req.url} New Request Recived\n`;
  const myUrl = url.parse(req.url, true)
  fs.appendFile("log.txt", log, (err ,data) => {
    switch(myUrl.pathname){
        case "/": res.end("Hello World");
            break;
        case "/about":res.end("About Page");
            break;
        default: res.end("404 Page Not Found");
    }
  });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
