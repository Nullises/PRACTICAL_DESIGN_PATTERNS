"use strict";
var Repo = require("../module/taskRepository");

class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
  }

  complete() {
    console.log("completing Task:", this.name);
    this.completed = true;
  }
  save() {
    console.log("saving Task: " + this.name);
    Repo.save(this);
  }
}
module.exports = Task;
