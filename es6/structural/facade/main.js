const Task = require("./task");
const TaskServiceWrapper = require("./taskServiceWrapper");

let myTask = new Task({
  name: "MyTask",
  priority: 1,
  project: "Seniority",
  user: "Ulises",
  completed: false,
});

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);
