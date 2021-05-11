events = require("events");
eventEmitter = new events.EventEmitter();

counter = 0;

eventEmitter.on("INC", function () {
  counter++;
  console.log("Count: " + counter);
});

eventEmitter.on("DEC", function () {
  counter--;
  console.log("Count: " + counter);
});

eventEmitter.emit("INC");
eventEmitter.emit("INC");
eventEmitter.emit("INC");
eventEmitter.emit("DEC");

