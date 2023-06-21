class Task {
  constructor(name, completed) {
    this.name = name;
    this.completed = completed;
  }
}

// Define our prototypes
// Indeed, class is built in prototypes
// DONT FORGET: THE FOLLOWING FUNCTIONS CANNOT BE CREATED USING ARROW FUNCTIONS
Task.prototype.complete = function () {
  console.log("completing Task:", this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log("saving Task: " + this.name);
};

module.exports = Task;
