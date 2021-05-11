http = require("http");
url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    queryObject = url.parse(req.url, true).query;
    a = queryObject.a;
    b = queryObject.b;

    c = parseInt(a) + parseInt(b);

    res.write("<h1>" + c + "</h1>");
    res.end();
  })
  .listen(9000, function () {
    console.log("Listening on port 9000");
  });

  