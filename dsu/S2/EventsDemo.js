events = require("events");
eventEmitter = new events.EventEmitter();

eventEmitter.on("scream", function() {
  console.log("I hear a scream");
});

eventEmitter.emit("scream");


