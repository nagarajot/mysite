express = require("express");

app = express();

app.get("/:a/:b/:opr", function (req, res) {
  a = parseInt(req.params.a);
  b = parseInt(req.params.b);

  opr = req.params.opr;

  switch (opr)
  {
    case '+':
        result = a + b;
        break;

    case '-':
        result = a - b;
        break;

    case 'x':
        result = a * b;
        break;

    case '/':
        result = a / b;
        break;

    case '%':
        result = a % b;
        break;

    default:
        result = "Invalid input";
        break;    
  }

  res.send("<h1>" + result + "</h1>");
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});

