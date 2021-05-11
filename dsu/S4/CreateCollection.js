mongodbClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

mongodbClient.connect(
  url,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    db = client.db("dsu");
    db.createCollection("students", function (err, result) {
      if (err) throw err;
      console.log("Collection created");
    });
  }
);


