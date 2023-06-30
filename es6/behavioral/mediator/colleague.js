/**
 * This is the object that interacts with other
 * of the same species, through Mediator
 */

class User {
  constructor(name, chatMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatMediator.showMessage(this, message);
  }
}

module.exports = User;
