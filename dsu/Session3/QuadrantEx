express = require("express");

app = express();

app.get("/:x/:y", function (req, res) {
  x = parseInt(req.params.x);
  y = parseInt(req.params.y);

  if ( x > 0 && y > 0 )
    quadrant = 1;
  else if ( x < 0 && y > 0 )
    quadrant = 2;
  else if ( x < 0 && y < 0 )
    quadrant = 3;
  else quadrant = 4;    

  res.send("<h1>" + quadrant + "</h1>");
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});



