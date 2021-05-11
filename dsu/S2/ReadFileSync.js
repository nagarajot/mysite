fs = require("fs");

try {
  data = fs.readFileSync("abc.txt", "utf-8");
} catch (err) {
  console.error(err);
}
console.log(data);

