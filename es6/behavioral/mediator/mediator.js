/**
 * MEDIATOR PATTERN
 */

// Mediator pattern adds a third party object (called mediator)
//to control the interaction between two objects (called colleagues).

// In this case, a chat room is a mediator, since acts a mediator between users

// This example is quite easy, and better than old Javascript implementation

class ChatRoom {
  showMessage(user, message) {
    const time = new Date();
    const sender = user.getName();

    console.log(`${time}[${sender}]: ${message}`);
  }
}

module.exports = ChatRoom;
