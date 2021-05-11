express = require("express");

app = express();

app.get("/", function (req, res) {
  date = new Date();

  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  res.send("<h1>" + day + "-" + month + "-" + year + " </h1>");
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});

