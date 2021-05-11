mongodbClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/dsu";

mongodbClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  console.log("Connection Successfull!");
});

