"use strict";
const http = require('http');
const port = 3000;
const quotes = require('./quotes');

const randomNumber = Math.floor((Math.random() * 10) + 1);
const randomQuote = quotes[randomNumber];

http.createServer((request, response) => {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<body style='background: #551A8B;'>");
    response.write("<div style='display: flex; align-items: center; justify-content: center; height: 100%;'>");
    response.write("<div style='padding: 100px;'><h1 style='color: yellow;'>" + randomQuote + "</h1><div>");
    response.end();
}).listen(port);

console.log("Listening on port http://localhost:" + port);