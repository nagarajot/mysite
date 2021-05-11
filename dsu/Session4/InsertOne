mongodbClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

mongodbClient.connect(
  url,
  { useUnifiedTopology: true },
  function (err, client) {
    if (err) throw err;
    db = client.db("dsu");

    student1 = {
      usn: "CS501",
      name: "Xavier",
      gender: "M",
      email: "xavier@gmail.com",
      city : "Mysore"
    };

    db.collection("students").insertOne(student1, function (err, result) {
      if (err) throw err;
      console.log("Document Inserted ..."); 
      client.close();
    });
  }
);


