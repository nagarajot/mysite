http = require("http");
url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    date = new Date();

    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    res.write("<h1>" + hour + ":" + min + ":" + sec + "</h1>");

    res.end();
  })
  .listen(9000, function () {
    console.log("Listening on port 9000");
  });

  