express = require("express");
bodyParser = require("body-parser");

app = express();
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("quadrant.hbs");
});

app.post("/", function (req, res) {
  body = req.body;
  x = parseInt(body.x);
  y = parseInt(body.y);

  if ( x > 0 && y > 0 )
    quadrant = 1;
  else if ( x < 0 && y > 0 )
    quadrant = 2;
  else if ( x < 0 && y < 0 )
    quadrant = 3;
  else quadrant = 4;  

  res.render("quadrantResult.hbs", { x, y, quadrant });
});

app.listen(9000, function () {
  console.log("Listening on port 9000");
});

