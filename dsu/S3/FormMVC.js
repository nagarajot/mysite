express = require("express");
bodyParser = require("body-parser");

app = express();
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("form.hbs");
});

app.post("/", function (req, res) {
  data = req.body;
  data.languages = data.languages.join(" ,");
  res.render("display.hbs", data);
});

app.listen(9000, function () {
  console.log("Listening on port 9000");
});

