mongodbClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

mongodbClient.connect(
  url,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    db = client.db("dsu");

    query = {};

    db.collection("students").countDocuments(
      {},
      function (err, numberOfDocuments) {
        if (err) throw err;
        console.log("Number of documents are " + numberOfDocuments);
        client.close();
      }
    );
  }
);


