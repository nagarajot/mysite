fs = require("fs");

fs.unlink("dsu.txt", function(err) {
  if (err) throw err;
  console.log("Done");
});

console.log("Finished");






