class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  complete() {
    console.log("completing task: " + this.name);
    this.completed = true;
  }

  save() {
    console.log("saving Task: " + this.name);
  }
}

let myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

// Decorated with new properties and functions
// without break the existing Task class
let urgentTask = new Task("Urgent Task");
urgentTask.priority = 2;
urgentTask.notify = () => {
  console.log("notifying important people");
};
urgentTask.complete();
urgentTask.notify();
urgentTask.save();
