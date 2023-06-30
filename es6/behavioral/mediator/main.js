const ChatRoom = require("./mediator");
const User = require("./colleague");
const mediator = new ChatRoom();

const john = new User("John Doe", mediator);
const jane = new User("Jane Doe", mediator);

john.send("Hi there!");
jane.send("Hey!");

// Output will be
// Feb 14, 10:58 [John]: Hi there!
// Feb 14, 10:58 [Jane]: Hey!
