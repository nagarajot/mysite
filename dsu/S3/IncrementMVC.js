express = require("express");
bodyParser = require("body-parser");

app = express();
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("counter.hbs", { count: 0 });
});
app.post("/", function (req, res) {
  count = req.body.count;
  count++;
  res.render("counter.hbs", { count });
});

app.listen(9000, function () {
  console.log("Listening on port 9000");
});


