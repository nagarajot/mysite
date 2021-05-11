mongoose = require("mongoose");

url = "mongodb://localhost:27017/dsu";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
db = mongoose.connection;

Student = mongoose.model("students", {
  usn: String,
  name: String,
  gender: String,
  email: String,
});

Student.find({ usn: "CS102" }, function (err, students) {
  if (err) throw err;
  console.log(students);
  db.close();
});

