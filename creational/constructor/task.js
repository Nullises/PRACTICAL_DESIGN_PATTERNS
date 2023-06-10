var Task = function (name) {
  this.name = name;
  this.completed = false;
  this.complete = function () {
    console.log("completing Task:", this.name);
    this.completed = true;
  };
  this.save = function () {
    console.log("saving Task: " + this.name);
  };
};

module.exports = Task;
