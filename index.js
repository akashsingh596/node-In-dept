////pure node server 

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const server = http.createServer((req, res) => {
// //   res.end("Hello World");
//   const log = `${Date.now()} : ${req.url} New Request Recived\n`;
//   const myUrl = url.parse(req.url, true)
//   fs.appendFile("log.txt", log, (err ,data) => {
//     switch(myUrl.pathname){
//         case "/": res.end("Hello World");
//             break;
//         case "/about":res.end("About Page");
//             break;
//         default: res.end("404 Page Not Found");
//     }
//   });
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

/////////////  server useing middleware express

const express = require("express");

// const http = require("http");

const app = express()

app.get('/',(req,res) =>{
    res.send("hello from home page")
})

app.get('/about',(req,res) =>{
    res.send("hello from about page")
})

// const server = http.createServer(app);

// server.listen(3000,()=>{
//     console.log(`server is running on port 3000`)
// })

app.listen(3000,()=>{
    console.log(`server is running on port 3000`)
})
