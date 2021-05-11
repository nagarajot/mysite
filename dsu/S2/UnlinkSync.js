fs = require("fs");

try {
  fs.unlinkSync("abc.txt");
} catch (err) {
  console.error(err);
}


