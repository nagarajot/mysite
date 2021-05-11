express = require("express");

app = express();

app.get("/:n", function (req, res) {
  n = parseInt(req.params.n);

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

  res.send("<h1>" + word + "</h1>");
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});

