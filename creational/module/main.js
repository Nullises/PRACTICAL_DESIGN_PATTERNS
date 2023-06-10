var Task = require("../constructor/class");
var Repo = require("./taskRepository");

// Construct a new Task from task Class using Repo module
var task1 = new Task(Repo.get(1));
var task2 = new Task({ name: "create a demo for modules" });
var task3 = new Task({ name: "create a demo for singletons" });
var task4 = new Task({ name: "create a demo for prototypes" });

task1.complete();

task2.save();
task3.save();
task4.save();
