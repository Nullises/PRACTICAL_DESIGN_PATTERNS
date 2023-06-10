var Task = function (data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
};

// Using prototypes
Task.prototype.complete = function () {
  console.log("completing Task:", this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log("saving Task: " + this.name);
};

module.exports = Task;
