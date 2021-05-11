mongodbClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

mongodbClient.connect(
  url,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    db = client.db("dsu");

    data = [
      {
        usn: "CS102",
        name: "minica",
        gender: "F",
        email: "monica@gmail.com",
      },
      {
        usn: "CS103",
        name: "Mary",
        gender: "F",
        email: "mary@gmail.com",
      },
    ];

    db.collection("students").insertMany(data, function (err, result) {
      if (err) throw err;
      console.log("Inserted successfully ...");
      client.close();
    });
  }
);

