class Task {
  constructor() {
    this.tasks = {};
    this.commands = [];
  }

  get(id) {
    console.log("Getting Task " + id);
    return {
      id: id,
      name: "new task from DB",
    };
  }

  save(task) {
    this.tasks[task.id] = task;
    console.log("Saving " + task.name + " to the DB");
  }

  execute(name, args) {
    // Save in commands to log
    this.commands.push({
      name,
      args,
    });
    // If name of method exists in class
    if (this[name]) {
      this[name](args); // save arguments
    }
  }
}

let myTask = new Task();

// Execute our command
myTask.execute("save", {
  id: 1,
  name: "Task 1",
  completed: false,
});
myTask.execute("save", {
  id: 2,
  name: "Task 2",
  completed: false,
});
myTask.execute("save", {
  id: 3,
  name: "Task 3",
  completed: false,
});
myTask.execute("get", 1);
console.log(myTask.commands);
