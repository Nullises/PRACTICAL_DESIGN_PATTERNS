var Task = function (name) {
  this.name = name;
  this.completed = false;
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
