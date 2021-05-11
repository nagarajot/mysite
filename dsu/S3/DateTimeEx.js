express = require("express");

app = express();

app.get("/:option", function (req, res) {
  option = req.params.option;

  if (option == "date") {
    date = new Date();

    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();

    res.send("<h1>" + day + "-" + month + "-" + year + " </h1>");
  } else {
    date = new Date();

    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    res.send("<h1>" + hour + ":" + min + ":" + sec + "</h1>");
  }
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});

