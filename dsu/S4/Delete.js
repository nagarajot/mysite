mongodbClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

mongodbClient.connect(
  url,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    db = client.db("dsu");

    query = {
      usn: "CS101",
    };

    db.collection("students").deleteOne(query, function (err, result) {
      if (err) throw err;
      client.close();
    });
  }
);

