express = require("express");
bodyParser = require("body-parser");

app = express();
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/html", function (req, res) {
  res.sendFile(__dirname + "/" + "Mysore.html");
});

app.get("/image", function (req, res) {
  res.sendFile(__dirname + "/" + "MysorePalace.jpg");
});

app.listen(9000, function () {
  console.log("Listening on port 9000");
});
