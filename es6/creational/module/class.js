const Repo = require("../module/taskRepository");
class Task {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.completed = false;
  }

  complete() {
    console.log("completing Task:" + this.id + ":" + this.name);
    this.completed = true;
  }
  save() {
    console.log("saving Task: " + this.id + ":" + this.name);
    Repo.save(this);
  }
}
module.exports = Task;
