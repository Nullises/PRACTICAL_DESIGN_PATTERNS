/**
 * OBSERVER PATTERN IN NODE.JS WITH EVENT EMITTER
 */

/**
 * This approach is quite easy, rather than old Javascript implementation.
 */

/**
 * ADDING EVENTS
 */

const EventEmitter = require("events");
const myEvent = new EventEmitter();

// First listener
myEvent.on("test", () => {
  console.log("First test listener");
});

// Second listener
myEvent.on("test", (arg1, arg2) => {
  console.log(`Second test listener with parameters ${arg1}, ${arg2}`);
});

// Third listener
myEvent.on("test", (...args) => {
  const parameters = args.join(", ");
  console.log(`Third test listener with parameters ${parameters}`);
});

myEvent.emit("test", 1, 2, 3);

// Prints :
// First test listener
// Second test listener with parameters 1, 2
// Third test listener with parameters 1, 2, 3

/**
 *
 * REMOVING EVENTS
 */

const callbackA = () => {
  console.log("A");
  myEvent.removeListener("event", callbackB);
};

const callbackB = () => {
  console.log("B");
};

myEvent.on("event", callbackA);

myEvent.on("event", callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEvent.emit("event");
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEvent.emit("event");
// Prints:
//   A

/**
 * REMOVING ALL ELEMENTS
 */

// Removes all listeners, or those of the specified event.
// In this case, I will remove my specific event called "test"
myEvent.removeAllListeners(["test"]);

// Calling my event again
myEvent.emit("test", 1, 2, 3);
// This doesn't show since I've remove already
// all listeners for that specific event
