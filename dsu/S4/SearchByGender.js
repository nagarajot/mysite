mongodbClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

mongodbClient.connect(
  url,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    db = client.db("dsu");

    db.collection("students")
      .find({ gender: "M" })
      .toArray(function (err, documents) {
        if (err) throw err;
        console.log(documents);
        client.close();
      });
  }
);



