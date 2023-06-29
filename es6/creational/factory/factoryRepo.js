const task = require("./taskRepo");
const project = require("./projectRepo");
const user = require("./userRepo");

function factoryRepo() {
  this.getRepo = function (type, id, name) {
    if (type === "task") {
      return new task(id, name);
    }
    if (type === "project") {
      return new project(id, name);
    }
    if (type === "user") {
      return new user(id, name);
    }
  };
}

module.exports = new factoryRepo();
