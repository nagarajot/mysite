http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.write("<h1>Hello World</h1>");
    res.end();
  })
  .listen(9000, function () {
    console.log("Listening on port 9000");
  });

  