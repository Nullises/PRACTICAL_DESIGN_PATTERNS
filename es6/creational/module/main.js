const Task = require("./class");
const Repo = require("./taskRepository");

// Construct a new Task from task Class using Repo module
let task1 = new Task(Repo.get(1));
let task2 = new Task({ id: 2, name: "create a demo for modules" });
let task3 = new Task({ id: 3, name: "create a demo for singletons" });
let task4 = new Task({ id: 4, name: "create a demo for prototypes" });

task1.complete();

task2.save();
task3.save();
task4.save();
