http = require("http");
url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    date = new Date();

    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();

    res.write("<h1>" + day + "-" + month + "-" + year + " </h1>");

    res.end();
  })
  .listen(9000, function () {
    console.log("Listening on port 9000");
  });

  