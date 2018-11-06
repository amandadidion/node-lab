const http = require("http");
const user = require('./quotes');

const onRequest = (request, response) => {
response.writeHead(200, { "Content-type": "text/plain" });
response.write(`${user.randomQuotes()}`);
response.end();
}

http.createServer(onRequest).listen(3000);

