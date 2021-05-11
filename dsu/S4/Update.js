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

    value = {
      $set: {
        email: "john123@hotmail.com",
      },
    };

    db.collection("students").updateOne(query, value, function (err, result) {
      if (err) throw err;
      client.close();
    });
  }
);