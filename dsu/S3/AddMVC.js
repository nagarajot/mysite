express = require("express");
bodyParser = require("body-parser");

app = express();
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("add.hbs");
});
app.post("/", function (req, res) {
  body = req.body;
  a = parseInt(body.a);
  b = parseInt(body.b);
  c = a + b;

  res.render("result.hbs", { a, b, c });
});

app.listen(9000, function () {
  console.log("Listening on port 9000");
});

