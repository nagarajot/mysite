express = require("express");

app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});

