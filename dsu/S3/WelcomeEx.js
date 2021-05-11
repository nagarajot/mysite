express = require("express");

app = express();

app.get("/:name", function (req, res) {
  personName = req.params.name;
  res.send("<h1> Welcome " + personName + " </h1>");
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});

