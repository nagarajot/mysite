express = require("express");

app = express();

app.get("/:usn", function (req, res) {
  usn = req.params.usn;

  students = [
    {
      usn: "CS101",
      name: "John",
      gender: "M",
    },
    {
      usn: "CS102",
      name: "Stefan",
      gender: "M",
    },
    {
      usn: "CS103",
      name: "Damon",
      gender: "M",
    },
  ];

  student = {};

  students.forEach(function (st) {
    if (st.usn == usn) {
      student = st;
      return;
    }
  });

  content =
    "<h1>" +
    "USN: " +
    student.usn +
    "<br>" +
    "Name: " +
    student.name +
    "<br>" +
    "Gender: " +
    student.gender +
    "<br>" +
    "</h1>";

  res.send(content);
});

app.listen(9001, function () {
  console.log("Listening on port 9001");
});

