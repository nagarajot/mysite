mongodbClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

mongodbClient.connect(
  url,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    db = client.db("dsu");

    db.collection("students").findOne(
      { usn: "CS101" },
      function (err, document) {
        if (err) throw err;
        console.log(document);
        client.close();
      }
    );
  }
);


