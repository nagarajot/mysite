http = require("http");
url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    queryObject = url.parse(req.url, true).query;
    usn = queryObject.usn;

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

    res.write("<h1>");
    res.write("USN: " + student.usn + "<br>");
    res.write("Name: " + student.name + "<br>");
    res.write("Gender: " + student.gender + "<br>");
    res.write("</h1>");

    res.end();
  })
  .listen(9000, function () {
    console.log("Listening on port 9000");
  });

