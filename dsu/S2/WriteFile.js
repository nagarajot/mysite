fs = require("fs");

fs.writeFile("dsu.txt", "DSU, Koodlu Gate,  Bangalore", function(err) {
  if (err) throw err;
  console.log("Done");
});

console.log("Finished");

