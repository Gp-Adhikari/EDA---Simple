const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", (data) => {
  console.log("Received event with data:", data);
});

myEmitter.emit("event", { message: "Hello, World!" });
