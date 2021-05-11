http = require("http");
url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    queryObject = url.parse(req.url, true).query;
    n = parseInt(queryObject.n);

    word = "";

    switch (n) {
      case 0:
        word = "Zero";
        break;
      case 1:
        word = "One";
        break;
      case 2:
        word = "Two";
        break;
      default:
        word = "Invalid Input";
    }

    res.write("<h1>" + word + "</h1>");
    res.end();
  })
  .listen(9000, function () {
    console.log("Listening on port 9000");
  });


