mongoose = require("mongoose");

url = "mongodb://localhost:27017/dsu";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
db = mongoose.connection;

db.on("error", function () {
  console.log("Error");
});

db.once("open", function () {
  console.log("Connection Successful");
  db.close();
});


