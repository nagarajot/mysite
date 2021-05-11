fs = require("fs");

fs.readFile("dsu.txt", "utf-8", function(err, data) {
  if (err) throw err;
  console.log(data);
});

console.log("Finished");

