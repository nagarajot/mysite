fs = require("fs");

try {
  fs.writeFileSync("xyz.txt", "Dayanad Sagar University");
} catch (err) {
  console.error(err);
}


