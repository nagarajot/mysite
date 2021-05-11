express = require("express");

app = express();

app.get("/", function (req, res) {
  date = new Date();

  hour = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  res.send("<h1>" + hour + ":" + min + ":" + sec + "</h1>");
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});

